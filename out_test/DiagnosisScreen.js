import { useState } from "react";
import { Camera, Image as ImageIcon, AlertTriangle, ShieldCheck } from "lucide-react";
import Header from "../../components/layout/Header";
import BottomTabs from "../../components/layout/BottomTabs";
import "./DiagnosisScreen.css";
function Diagnosis() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const simulateScan = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        disease: "Early Blight",
        confidence: 94,
        severity: "Moderate",
        action: "Apply Copper Oxychloride 50% WP @ 2.5g/L water."
      });
    }, 2e3);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "screen-layout bg-muted" }, /* @__PURE__ */ React.createElement("div", { className: "screen-topbar" }, /* @__PURE__ */ React.createElement(Header, { title: "AI Diagnosis", showBack: true })), /* @__PURE__ */ React.createElement("div", { className: "screen-body" }, /* @__PURE__ */ React.createElement("div", { className: "screen-content pb-nav" }, !result ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "camera-viewfinder card" }, analyzing ? /* @__PURE__ */ React.createElement("div", { className: "scanning-overlay" }, /* @__PURE__ */ React.createElement("div", { className: "scan-line" }), /* @__PURE__ */ React.createElement("p", null, "Analyzing leaf patterns...")) : /* @__PURE__ */ React.createElement("div", { className: "viewfinder-content", onClick: simulateScan }, /* @__PURE__ */ React.createElement(Camera, { size: 48, color: "var(--primary)" }), /* @__PURE__ */ React.createElement("p", null, "Tap to scan crop"))), /* @__PURE__ */ React.createElement("div", { className: "upload-options" }, /* @__PURE__ */ React.createElement("button", { className: "btn-secondary full-width", disabled: analyzing, onClick: simulateScan }, /* @__PURE__ */ React.createElement(ImageIcon, { size: 20, className: "mr-2" }), " Upload from Gallery")), /* @__PURE__ */ React.createElement("div", { className: "recent-scans mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("h3", null, "Recent Scans")), /* @__PURE__ */ React.createElement("div", { className: "card scan-history-card" }, /* @__PURE__ */ React.createElement("div", { className: "history-img history-1" }), /* @__PURE__ */ React.createElement("div", { className: "history-details" }, /* @__PURE__ */ React.createElement("h4", null, "Wheat Rust"), /* @__PURE__ */ React.createElement("p", null, "Scanned 2 weeks ago"), /* @__PURE__ */ React.createElement("span", { className: "badge bg-green" }, "Resolved"))))) : /* @__PURE__ */ React.createElement("div", { className: "diagnosis-result slide-up" }, /* @__PURE__ */ React.createElement("div", { className: "result-header" }, /* @__PURE__ */ React.createElement("div", { className: "result-img" }), /* @__PURE__ */ React.createElement("div", { className: "result-title" }, /* @__PURE__ */ React.createElement("h2", null, result.disease), /* @__PURE__ */ React.createElement("div", { className: "confidence-badge" }, /* @__PURE__ */ React.createElement(ShieldCheck, { size: 14 }), " ", result.confidence, "% Match"))), /* @__PURE__ */ React.createElement("div", { className: "card result-card border-error mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "card-header border-bottom" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 20, color: "var(--error)" }), /* @__PURE__ */ React.createElement("span", { className: "font-bold ml-2 text-error" }, "Severity: ", result.severity)), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("p", { className: "treatment-text" }, result.action), /* @__PURE__ */ React.createElement("div", { className: "product-recommendation mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "product-img" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-bold" }, "Copper Oxychloride"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted" }, "\u20B9350 / 500g")), /* @__PURE__ */ React.createElement("button", { className: "btn-outline-primary btn-sm ml-auto" }, "Buy")))), /* @__PURE__ */ React.createElement("button", { className: "btn-secondary full-width mt-4", onClick: () => setResult(null) }, "Scan Another Image")))), /* @__PURE__ */ React.createElement("div", { className: "screen-bottomnav" }, /* @__PURE__ */ React.createElement(BottomTabs, null)));
}
export {
  Diagnosis as default
};
