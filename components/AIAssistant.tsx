
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm your ProSport guide. I can help you with pricing, features, or setting up your own booking platform. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a professional sales expert for ProSport Booking. 
          Your goal is to convert sports facility owners into customers. 
          Context: 
          - ProSport is an all-in-one management tool for turfs, courts, and pools.
          - Key value: Increases bookings by 40%, automates payments via Razorpay/UPI, and launches in 48h.
          - Pricing: Custom tailored based on venue size.
          - Sports: Box Cricket, Football, Badminton, Tennis, etc.
          Rules:
          - Be extremely helpful and charismatic.
          - Keep answers under 40 words.
          - Always mention that we handle the full technical setup for them.`,
        },
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact our support team.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting. Our humans are available via the 'WhatsApp' button on the page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-slate-900 border border-slate-700 w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-emerald-500 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2">
              <Bot className="text-slate-950 w-6 h-6" />
              <span className="text-slate-950 font-bold">ProSport AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-950 hover:bg-black/10 p-1 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-500 text-slate-950 font-semibold rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-800 bg-slate-900">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about setup or pricing..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-all pr-12 text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 bg-emerald-500 text-slate-950 p-1.5 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-4 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-110 active:scale-95 animate-float flex items-center gap-2 font-bold"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline">Quick Support</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
