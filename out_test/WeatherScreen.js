import { Sun, CloudRain, Wind, Droplets, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import "./WeatherScreen.css";
function Weather() {
  const navigate = useNavigate();
  const forecast = [
    { day: "Mon", temp: "28\xB0", icon: Sun },
    { day: "Tue", temp: "27\xB0", icon: Sun },
    { day: "Wed", temp: "25\xB0", icon: CloudRain },
    { day: "Thu", temp: "24\xB0", icon: CloudRain },
    { day: "Fri", temp: "26\xB0", icon: Sun },
    { day: "Sat", temp: "28\xB0", icon: Sun },
    { day: "Sun", temp: "29\xB0", icon: Sun }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen-layout bg-muted" }, /* @__PURE__ */ React.createElement("div", { className: "screen-topbar" }, /* @__PURE__ */ React.createElement(Header, { title: "Weather Forecast", showBack: true })), /* @__PURE__ */ React.createElement("div", { className: "screen-body" }, /* @__PURE__ */ React.createElement("div", { className: "screen-content pb-nav" }, /* @__PURE__ */ React.createElement("div", { className: "weather-hero-card" }, /* @__PURE__ */ React.createElement("p", { className: "text-center text-muted" }, "Ludhiana, Punjab"), /* @__PURE__ */ React.createElement("div", { className: "temp-display" }, /* @__PURE__ */ React.createElement(Sun, { size: 64, color: "var(--tertiary)", className: "weather-hero-icon" }), /* @__PURE__ */ React.createElement("h1", { className: "temp-huge" }, "28\xB0", /* @__PURE__ */ React.createElement("span", { className: "unit" }, "C"))), /* @__PURE__ */ React.createElement("p", { className: "text-center font-bold mt-2" }, "Mostly Sunny"), /* @__PURE__ */ React.createElement("p", { className: "text-center text-sm text-muted" }, "H: 31\xB0 L: 19\xB0"), /* @__PURE__ */ React.createElement("div", { className: "weather-stats-grid mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "weather-stat-box" }, /* @__PURE__ */ React.createElement(Droplets, { size: 20, color: "var(--primary)" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted" }, "Humidity"), /* @__PURE__ */ React.createElement("p", { className: "font-bold" }, "45%"))), /* @__PURE__ */ React.createElement("div", { className: "weather-stat-box" }, /* @__PURE__ */ React.createElement(Wind, { size: 20, color: "var(--primary)" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted" }, "Wind"), /* @__PURE__ */ React.createElement("p", { className: "font-bold" }, "12 km/h"))), /* @__PURE__ */ React.createElement("div", { className: "weather-stat-box" }, /* @__PURE__ */ React.createElement(CloudRain, { size: 20, color: "var(--primary)" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted" }, "Rain"), /* @__PURE__ */ React.createElement("p", { className: "font-bold" }, "0%"))))), /* @__PURE__ */ React.createElement("div", { className: "section-header mt-4" }, /* @__PURE__ */ React.createElement("h3", null, "7-Day Forecast")), /* @__PURE__ */ React.createElement("div", { className: "card forecast-list" }, forecast.map((item, index) => {
    const Icon = item.icon;
    return /* @__PURE__ */ React.createElement("div", { key: index, className: "forecast-row" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold w-12" }, item.day), /* @__PURE__ */ React.createElement("span", { className: "flex-1 flex justify-center" }, /* @__PURE__ */ React.createElement(Icon, { size: 20, color: Icon === Sun ? "var(--tertiary)" : "var(--primary)" })), /* @__PURE__ */ React.createElement("span", { className: "w-12 text-right font-bold" }, item.temp));
  })))));
}
export {
  Weather as default
};
