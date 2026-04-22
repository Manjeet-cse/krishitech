import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIAssistantScreen.css';

export default function AIAssistantScreen() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [activeMode, setActiveMode] = useState('voice');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Namaste! I am your Digital Agronomist. How can I assist you with your farm today?'
    },
    {
      id: 2,
      sender: 'user',
      text: 'What is the current price of wheat in the local Mandi?'
    },
    {
      id: 3,
      sender: 'ai',
      isChart: true,
      text: 'The current average price for Wheat (Lokwan) at your nearest Mandi is',
      highlight: '₹2,450 / quintal'
    }
  ]);
  const chatRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial load — only auto-scroll when the user sends a new message
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: `I understand you are asking about "${userMsg.text}". For mustard, the current best practice is to spray Neem oil 10000 ppm.`
      }]);
    }, 1000);
  };

  const chartBars = [55, 60, 68, 65, 75, 82, 95];

  return (
    <div className="nk-ai-root">

      {/* ── Header ─────────────────────────────── */}
      <header className="nk-ai-header">
        <div className="nk-ai-header-left">
          <div className="nk-ai-avatar-icon">
            <span className="material-symbols-outlined nk-ai-avatar-symbol">robot_2</span>
          </div>
          <div>
            <h1 className="nk-ai-title">NeoKrishi AI</h1>
            <p className="nk-ai-status">
              <span className="nk-ai-status-dot"></span>
              Online
            </p>
          </div>
        </div>
        <button
          className="nk-ai-close-btn"
          aria-label="Close"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="nk-ai-header-divider"></div>
      </header>

      {/* ── Chat Canvas ─────────────────────────── */}
      <main className="nk-ai-chat" ref={chatRef}>
        {messages.map((msg, idx) => (
          msg.sender === 'ai' ? (
            /* AI Bubble */
            <div
              key={msg.id}
              className="nk-ai-row"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="nk-ai-bot-avatar">
                <span className="material-symbols-outlined nk-ai-bot-symbol">robot_2</span>
              </div>
              <div className={`nk-ai-bubble${msg.isChart ? ' nk-ai-bubble--wide' : ''}`}>
                <p className="nk-ai-bubble-text">
                  {msg.isChart ? (
                    <>{msg.text} <strong className="nk-ai-price">{msg.highlight}</strong>.</>
                  ) : msg.text}
                </p>

                {msg.isChart && (
                  <div className="nk-chart-card">
                    <p className="nk-chart-label">
                      <span className="material-symbols-outlined nk-chart-icon">trending_up</span>
                      7-Day Trend
                    </p>
                    <div className="nk-chart-bars">
                      {chartBars.map((h, i) => (
                        i === chartBars.length - 1 ? (
                          <div key={i} className="nk-bar nk-bar--today" style={{ height: `${h}%` }}>
                            <span className="nk-bar-tooltip">₹2450</span>
                          </div>
                        ) : (
                          <div key={i} className="nk-bar nk-bar--normal" style={{ height: `${h}%` }}></div>
                        )
                      ))}
                    </div>
                    <div className="nk-chart-xaxis">
                      <span>Mon</span>
                      <span>Today</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* User Bubble */
            <div
              key={msg.id}
              className="nk-user-row"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="nk-user-bubble">
                {msg.text}
              </div>
            </div>
          )
        ))}

      </main>

      {/* ── Bottom Input Area ───────────────────── */}
      <div className="nk-ai-input-area">
        <div className="nk-ai-input-fade"></div>

        {/* Mode Pills */}
        <div className="nk-mode-pills">
          {['text', 'voice', 'image'].map(mode => (
            <button
              key={mode}
              className={`nk-pill${activeMode === mode ? ' nk-pill--active' : ''}`}
              onClick={() => setActiveMode(mode)}
            >
              {mode === 'voice' && activeMode === 'voice' && (
                <span className="material-symbols-outlined nk-pill-icon">mic</span>
              )}
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        {/* Input Row */}
        <div className="nk-input-row">
          <div className="nk-text-input-wrap">
            <button className="nk-input-btn">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <input
              type="text"
              className="nk-text-field"
              placeholder="Message NeoKrishi..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
            />
            <button className="nk-input-btn">
              <span className="material-symbols-outlined">photo_camera</span>
            </button>
          </div>

          <button
            className="nk-mic-btn"
            onClick={input.trim() ? handleSend : undefined}
            aria-label={input.trim() ? 'Send' : 'Voice input'}
          >
            <span
              className="material-symbols-outlined nk-mic-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {input.trim() ? 'send' : 'mic'}
            </span>
          </button>
        </div>

        <p className="nk-disclaimer">
          NeoKrishi AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}
