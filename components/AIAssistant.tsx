import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Utensils, Clock, MapPin } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Welcome to Sanger Country Cafe! I'm your digital host. Are you looking for a recommendation, or would you like to know our hours?"}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    { label: "Recommend dinner", icon: <Utensils size={14} /> },
    { label: "Breakfast favorites", icon: <Sparkles size={14} /> },
    { label: "Opening hours", icon: <Clock size={14} /> },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (forcedInput?: string) => {
    const userMsg = forcedInput || input.trim();
    if (!userMsg || isLoading) return;

    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const menuContext = MENU_ITEMS.map(item => 
        `- ${item.name} ($${item.price.replace('$', '')}): ${item.description} (Category: ${item.category})`
      ).join('\n');

      const systemInstruction = `
        You are the Sanger Country Cafe Concierge, a warm and professional AI host.

        Cafe Background:
        - A family-owned Sanger landmark serving authentic country comfort food.
        - Known for generous portions, friendly staff (like Lorena), and a cozy atmosphere.

        Your Mission:
        - Provide detailed menu recommendations based on the provided list.
        - If asked for recommendations, you MUST suggest the New York Steak, Breakfast Buffet, or Country Club Sandwich.
        - For each suggestion, explain WHY it is popular.
        - Always encourage booking a table via the website form or by calling ${BUSINESS_INFO.phone}.

        Formatting rules for all replies:
        - Do not use asterisks, star characters, or star emojis.
        - Do not use asterisk-based markdown such as bold or italic with *.
        - Use plain text only. Keep layout simple and avoid structural or color changes.
        - Use hyphen (-) for bullets and simple indentation when needed.
        - Use an em-dash (—) to separate item name and price when showing price.

        How to format recommendations:
        - For each recommended item, present exactly like this example using plain text:
          Item Name — $Price
            - A brief, indented description of why this item is a favorite and what makes it special.
        - If suggesting items from different categories, put a short plain header above the group (for example: "ENTREES" or "BREAKFAST").
        - Ensure prices are clearly visible and separated from the name by an em-dash.

        Menu Data:
        ${menuContext}

        Operating Hours:
        - Sun-Thu: ${BUSINESS_INFO.hours.sun_thu}
        - Fri-Sat: ${BUSINESS_INFO.hours.fri_sat}

        Tone:
        - Helpful, local, inviting, professional, and structured.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: systemInstruction }] },
          { role: 'user', parts: [{ text: `Customer says: ${userMsg}` }] }
        ],
      });

      const botText = response.text || "I'm sorry, I'm having a momentary lapse in memory. Can you repeat that or call us directly?";
      setMessages(prev => [...prev, {role: 'bot', text: botText}]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, {role: 'bot', text: "I'm having a bit of a technical hiccup. Please reach us at " + BUSINESS_INFO.phone + " for immediate help!"}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-[2rem] shadow-2xl w-[350px] sm:w-[420px] flex flex-col overflow-hidden border border-stone-100 animate-in slide-in-from-bottom-5 zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-orange-700 p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Sparkles size={80} />
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">Cafe Concierge</h4>
                <p className="text-[10px] opacity-70 uppercase tracking-widest font-black mt-0.5">Sanger Country Cafe AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-full transition-all relative z-10 active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Window */}
          <div 
            ref={scrollRef} 
            className="h-[450px] overflow-y-auto p-6 space-y-6 bg-stone-50/50 custom-scrollbar"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${
                    msg.role === 'user' ? 'bg-orange-700 text-white' : 'bg-white text-stone-400 border border-stone-100'
                  }`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-orange-700 text-white rounded-tr-none' 
                      : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Quick Suggestions - Only show when no messages or only bot welcome */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(suggestion.label)}
                    className="flex items-center gap-2 bg-white border border-stone-200 hover:border-orange-300 hover:text-orange-700 px-4 py-2 rounded-full text-xs font-bold text-stone-500 transition-all shadow-sm active:scale-95"
                  >
                    {suggestion.icon} {suggestion.label}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-2xl border border-stone-100 shadow-sm flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-stone-100">
            <div className="relative flex items-center gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can I help you today?" 
                className="flex-grow pl-5 pr-12 py-3.5 bg-stone-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-orange-500/20 transition-all outline-none font-medium placeholder:text-stone-400"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 bg-orange-700 text-white p-2 rounded-xl hover:bg-orange-800 transition-all shadow-lg shadow-orange-900/20 disabled:opacity-30 disabled:shadow-none active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-center text-stone-300 mt-4 font-bold uppercase tracking-widest">
              AI recommendations are based on our current menu
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-700 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(194,65,12,0.3)] hover:scale-110 transition-all active:scale-95 group relative border-4 border-white"
        >
          <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full text-orange-700 shadow-md">
            <Sparkles size={12} fill="currentColor" />
          </div>
          <MessageCircle size={28} />
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-stone-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask for a recommendation!
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;