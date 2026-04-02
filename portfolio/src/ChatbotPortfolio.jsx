import { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle, Minimize2 } from "lucide-react";
import "./ChatbotGemini.css";
import { isTagalog, patterns, defaultResponse } from "./chatbotPatterns";
import profile from './assets/resume2x2.png'; 

import profileDark from './assets/dark.jpg';

export default function ChatbotModern() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const endRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      name: "Jhed Sarmiento",
      text: "Hi there!  👋🏻  Thanks for visiting my portfolio. Feel free to ask me anything about my skills, projects, or experience!",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  useEffect(() => {
    // Check if parent container has dark mode
    const container = document.querySelector('.container');
    if (container) {
      setIsDarkMode(container.classList.contains('dark-mode'));
      
      // Observer for dark mode changes
      const observer = new MutationObserver(() => {
        setIsDarkMode(container.classList.contains('dark-mode'));
      });
      
      observer.observe(container, { attributes: true, attributeFilter: ['class'] });
      
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const botReply = (text) => {
    const lang = isTagalog(text) ? "tl" : "en";
    const lowerText = text.toLowerCase();

    const forceSkills = lowerText.includes("tech") ||
                        lowerText.includes("skills") ||
                        lowerText.includes("coding") ||
                        lowerText.includes("stack") ||
                        lowerText.includes("framework");

    const forceCareer = lowerText.includes("future") ||
                        lowerText.includes("plano") ||
                        lowerText.includes("pangarap") ||
                        lowerText.includes("career");

    const forceBackground = lowerText.includes("background") &&
                            !forceSkills && !forceCareer;

    const matchPattern = (patternsArray, matchFn) => {
      for (const p of patternsArray) {
        if (p.patterns.some(keyword => matchFn(keyword.toLowerCase()))) {
          const res = p.response[lang];
          return Array.isArray(res) ? res[Math.floor(Math.random() * res.length)] : res;
        }
      }
      return null;
    };

if (forceSkills) {
  const skillsSection = patterns.find(sec =>
    sec.response[lang]?.some(res =>
      res.toLowerCase().includes("tech stack") ||
      res.toLowerCase().includes("frontend")
    )
  );
  
  if (skillsSection) {
    const responses = skillsSection.response[lang];
    return Array.isArray(responses)
      ? responses[Math.floor(Math.random() * responses.length)]
      : responses;
  }
}


    if (forceCareer) {
      const careerSection = patterns.find(sec =>
        sec.response.en?.some(res => res.includes("career"))
      );
      const res = matchPattern([careerSection], kw => lowerText.includes(kw));
      if (res) return res;
    }

    if (forceBackground) {
      const aboutSection = patterns.find(sec =>
        sec.response.en?.some(res => res.includes("Full-Stack") || res.includes("interface"))
      );
      const res = matchPattern([aboutSection], kw => lowerText.includes(kw));
      if (res) return res;
    }

    let result = matchPattern(patterns, kw => lowerText === kw);
    if (result) return result;

    const words = lowerText.split(/\s+/);
    result = matchPattern(patterns, kw => words.includes(kw));
    if (result) return result;

    result = matchPattern(patterns, kw => lowerText.startsWith(kw));
    if (result) return result;

    result = matchPattern(patterns, kw =>
      kw.length > 3 && lowerText.includes(kw)
    );
    if (result) return result;

    return defaultResponse[lang];
  };
const avatarSrc = isDarkMode ? profileDark : profile;

  const send = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { from: "user", text: userText, time: currentTime }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          name: "Jhed Sarmiento",
          text: botReply(userText),
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        },
      ]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {!open && (
        <button 
          className={`chat-fab ${isDarkMode ? 'dark' : ''}`}
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle className="chat-fab-icon" size={22} />
          <span className="chat-fab-tooltip">Any questions?</span>
        </button>
      )}

      {open && (
        <div className={`chatbot-container ${minimized ? 'minimized' : ''} ${isDarkMode ? 'dark' : ''}`}>
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">
       <div className="avatar-img">
  <img src={avatarSrc} alt="Profile" />
</div>


             
              </div>
              <div className="chat-header-text">
                <h3>Chat with Jhed</h3>
                <p className="status-text">
                  <span className="status-dot"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="header-btn" 
                onClick={() => setMinimized(!minimized)}
                aria-label="Minimize"
              >
                <Minimize2 size={18} />
              </button>
              <button 
                className="header-btn" 
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              <div className="chat-body">
                <div className="messages-container">
                  {messages.map((m, i) => (
                    <div key={i} className={`message-wrapper ${m.from}`}>
           {m.from === "bot" && (
  <div className="message-avatar">
    <img src={avatarSrc} alt="Bot Avatar" />
  </div>
)}

                      <div className="message-content">
                        {m.from === "bot" && (
                          <span className="message-sender">{m.name}</span>
                        )}
                        <div className={`message-bubble ${m.from}`}>
                          <p>{m.text}</p>
                        </div>
                        <span className="message-time">{m.time}</span>
                      </div>
                    </div>
                  ))}

                  {typing && (
                    <div className="message-wrapper bot">
                     <div className="avatar-img">
  <img src={avatarSrc} alt="Profile" />
</div>

                      <div className="message-content">
                        <div className="message-bubble bot typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={endRef}></div>
                </div>
              </div>

           <div className="chat-footer">
  <div className="chat-input-wrapper">
    <input
      type="text"
      className="chat-input"
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && send()}
    />
    <button 
      className="send-button" 
      onClick={send}
      disabled={!input.trim()}
      aria-label="Send message"
    >
      <Send size={18} />
    </button>
  </div>

  {/* HINT TEXT */}
  <p className="chat-footer-hint">
    Ask me about myself, my skills, background, projects, or tech !
  </p>
</div>

            </>
          )}
        </div>
      )}
    </>
  );
}