import { useState, useRef, useEffect } from "react";
import { Send, Mic, Bot, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AIAssistantScreen.css";
function AIAssistant() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I am your Krishi AI Assistant. How can I help you today? You can ask me about crop diseases, mandi prices, or weather." }
  ]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: `I understand you are asking about "${newMsg.text}". For mustard, the current best practice is to spray Neem oil 10000 ppm.` }]);
    }, 1e3);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen-layout ai-bg" }, /* @__PURE__ */ React.createElement("div", { className: "top-bar" }, /* @__PURE__ */ React.createElement("div", { className: "top-bar-left" }, /* @__PURE__ */ React.createElement("button", { className: "icon-button", onClick: () => navigate(-1) }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 24, color: "#FFFFFF" }))), /* @__PURE__ */ React.createElement("div", { className: "top-bar-center" }, /* @__PURE__ */ React.createElement("h2", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement(Bot, { size: 20 }), " Krishi AI Assistant")), /* @__PURE__ */ React.createElement("div", { className: "top-bar-right" })), /* @__PURE__ */ React.createElement("div", { className: "chat-container" }, messages.map((msg, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: `chat-bubble-row ${msg.sender === "user" ? "user-row" : "ai-row"}` }, msg.sender === "ai" && /* @__PURE__ */ React.createElement("div", { className: "chat-avatar ai-avatar" }, /* @__PURE__ */ React.createElement(Bot, { size: 16, color: "white" })), /* @__PURE__ */ React.createElement("div", { className: `chat-bubble ${msg.sender === "user" ? "user-bubble" : "ai-bubble"}` }, /* @__PURE__ */ React.createElement("p", null, msg.text)), msg.sender === "user" && /* @__PURE__ */ React.createElement("div", { className: "chat-avatar user-avatar" }, /* @__PURE__ */ React.createElement(User, { size: 16, color: "var(--primary)" })))), /* @__PURE__ */ React.createElement("div", { ref: messagesEndRef })), /* @__PURE__ */ React.createElement("div", { className: "chat-input-area" }, /* @__PURE__ */ React.createElement("button", { className: "mic-btn" }, /* @__PURE__ */ React.createElement(Mic, { size: 20, color: "var(--primary)" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "chat-input",
      placeholder: "Ask anything...",
      value: input,
      onChange: (e) => setInput(e.target.value),
      onKeyPress: (e) => e.key === "Enter" && handleSend()
    }
  ), /* @__PURE__ */ React.createElement("button", { className: "send-btn", onClick: handleSend, disabled: !input.trim() }, /* @__PURE__ */ React.createElement(Send, { size: 20, color: "white" }))));
}
export {
  AIAssistant as default
};
