import { useState, useRef, useEffect } from 'react';
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
    response: "Hello! 👋 Welcome to Rootnode Technologies. I'm here to help you with any questions about our services. What can I assist you with today?",
  },
  {
    keywords: ['service', 'what do you do', 'offer', 'provide', 'help me with'],
    response: "We offer a wide range of IT services:\n\n🌐 **Web Development** — Modern, responsive websites\n📱 **Mobile App Development** — iOS & Android apps\n💻 **Software Development** — Custom enterprise solutions\n☁️ **Cloud & DevOps** — AWS, Azure, GCP infrastructure\n🤝 **IT Consulting** — Strategic tech guidance\n\nWhich service interests you?",
  },
  {
    keywords: ['web', 'website', 'react', 'frontend', 'landing page'],
    response: "We build stunning, high-performance websites using **React, Next.js, and Tailwind CSS**. Whether it's a business landing page, e-commerce store, or a complex web application — we deliver pixel-perfect results.\n\n💰 Starting from ₹15,000 for a professional website.\n\nWant a free consultation? Contact us!",
  },
  {
    keywords: ['mobile', 'app', 'android', 'ios', 'flutter', 'react native'],
    response: "We develop cross-platform mobile apps using **React Native** and **Flutter**. Your app will run beautifully on both iOS and Android from a single codebase.\n\n📱 Features: Push notifications, payments, GPS, camera, and more.\n\nLet's discuss your app idea!",
  },
  {
    keywords: ['software', 'custom', 'enterprise', 'erp', 'crm'],
    response: "We build custom software solutions tailored to your business needs:\n\n🏢 ERP Systems\n📊 CRM Applications\n📦 Inventory Management\n🔒 Secure Data Portals\n\nEvery solution is built from scratch to fit your exact workflow.",
  },
  {
    keywords: ['cloud', 'devops', 'aws', 'azure', 'server', 'hosting', 'deploy'],
    response: "Our Cloud & DevOps services include:\n\n☁️ AWS / Azure / GCP setup & management\n🚀 CI/CD pipeline configuration\n🔒 SSL & security hardening\n📈 Auto-scaling & load balancing\n💰 Cost optimization strategies\n\nWe keep your infrastructure running 24/7.",
  },
  {
    keywords: ['price', 'cost', 'charge', 'rate', 'budget', 'how much', 'pricing', 'quote'],
    response: "Our pricing is competitive and transparent:\n\n🌐 Website: Starting ₹5,000\n📱 Mobile App: Starting ₹15,000\n💻 Custom Software: Starting ₹10,000\n☁️ Cloud Setup: Starting ₹10,000\n\nEvery project is unique — contact us for a **free, no-obligation quote!**",
  },
  {
    keywords: ['contact', 'reach', 'call', 'email', 'phone', 'whatsapp', 'talk'],
    response: "You can reach us through:\n\n📧 **Email:** hello@rootnode.co.in\n📞 **Phone:** +91 7001034964\n💬 **WhatsApp:** +91 7001034964\n📍 **Location:** Birbhum, West Bengal, India\n\nOr scroll down to our Contact section to send a message directly!",
  },
  {
    keywords: ['location', 'where', 'office', 'address', 'based', 'birbhum'],
    response: "We are based in **Birbhum, West Bengal, India** 🇮🇳\n\nWe work with clients across India and globally. Remote collaboration is our strength!",
  },
  {
    keywords: ['time', 'how long', 'duration', 'deadline', 'delivery', 'timeline'],
    response: "Typical project timelines:\n\n🌐 Website: 1-3 weeks\n📱 Mobile App: 4-8 weeks\n💻 Custom Software: 6-16 weeks\n☁️ Cloud Setup: 1-2 weeks\n\nWe always deliver on time. Rush delivery is also available!",
  },
  {
    keywords: ['team', 'developer', 'who', 'about', 'company', 'rootnode'],
    response: "**Rootnode Technologies** is a passionate team of developers, designers, and IT consultants based in West Bengal.\n\n🎯 Our mission: Help businesses transform their ideas into powerful digital products.\n\n✅ 50+ Projects Delivered\n✅ 30+ Happy Clients\n✅ 3+ Years Experience",
  },
  {
    keywords: ['technology', 'tech stack', 'tools', 'framework', 'language'],
    response: "We work with cutting-edge technologies:\n\n**Frontend:** React, Next.js, Tailwind CSS, Vue.js\n**Backend:** Node.js, Express, Python, Django\n**Mobile:** React Native, Flutter\n**Database:** MongoDB, PostgreSQL, MySQL\n**Cloud:** AWS, Azure, Vercel, Docker\n**AI/ML:** TensorFlow, OpenAI APIs",
  },
  {
    keywords: ['portfolio', 'project', 'work', 'example', 'previous', 'showcase'],
    response: "Check out our portfolio section on this website! 🎨\n\nWe've built:\n• E-commerce platforms\n• Hospital management systems\n• Educational portals\n• AI-powered applications\n• SaaS dashboards\n\nScroll down to the **Portfolio** section to see more!",
  },
  {
    keywords: ['thank', 'thanks', 'awesome', 'great', 'perfect', 'nice'],
    response: "You're welcome! 😊 We're glad to help. If you have any more questions or want to start a project, don't hesitate to reach out.\n\n🚀 Let's build something amazing together!",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    response: "Goodbye! 👋 Thank you for chatting with us. Feel free to come back anytime. Have a great day! 🌟",
  },
];

const DEFAULT_RESPONSE = "I appreciate your question! For detailed information, you can:\n\n📧 Email us at **support@rootnode.co.in**\n📞 Call **+91 7001034964**\n💬 Or use our **Contact form** below\n\nOur team will get back to you within 24 hours!";

function getResponse(message) {
  const lowerMessage = message.toLowerCase();
  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return item.response;
    }
  }
  return DEFAULT_RESPONSE;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm Rootnode's assistant. How can I help you today?\n\nYou can ask me about:\n• Our **services**\n• **Pricing** & timelines\n• **Contact** information\n• Our **tech stack**\n• And more!",
      sender: 'bot',
      time: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user',
      time: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(userMessage.text),
        sender: 'bot',
        time: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    'Our Services',
    'Pricing',
    'Contact Info',
    'Tech Stack',
  ];

  const handleQuickAction = (action) => {
    setInputValue(action);
    const userMessage = {
      id: Date.now(),
      text: action,
      sender: 'user',
      time: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(action),
        sender: 'bot',
        time: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
    setInputValue('');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-brand to-mid rounded-full shadow-2xl shadow-brand/40 flex items-center justify-center text-white cursor-pointer group"
            aria-label="Open chat"
          >
            <HiChat className="text-2xl group-hover:scale-110 transition-transform" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-brand/30 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl shadow-night/20 flex flex-col overflow-hidden border border-brand/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-night to-night-light px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-sm">Rootnode Assistant</h3>
                  <p className="text-soft text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <HiX className="text-lg" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-light/30 to-white">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                        ? 'bg-gradient-to-br from-brand to-mid text-white rounded-br-md'
                        : 'bg-white text-night shadow-sm border border-brand/5 rounded-bl-md'
                      }`}
                  >
                    <div className="whitespace-pre-line" dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>')
                    }} />
                    <p className={`text-[10px] mt-1.5 ${msg.sender === 'user' ? 'text-white/50' : 'text-night/30'}`}>
                      {formatTime(msg.time)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-brand/5">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 rounded-full bg-brand/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-brand/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-brand/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 flex gap-2 flex-wrap border-t border-brand/5 bg-light/20 shrink-0">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    className="text-xs px-3 py-1.5 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-all duration-200 font-medium cursor-pointer"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-brand/5 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-light/50 border border-brand/10 text-night text-sm placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-brand/30 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-brand hover:bg-mid text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <HiPaperAirplane className="text-lg rotate-90" />
                </button>
              </div>
              <p className="text-[10px] text-night/20 text-center mt-2">Powered by Rootnode Technologies</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
