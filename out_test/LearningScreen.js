import { Search, PlayCircle, Filter } from "lucide-react";
import Header from "../../components/layout/Header";
import BottomTabs from "../../components/layout/BottomTabs";
import "./LearningScreen.css";
function Learning() {
  const videos = [
    { id: 1, title: "Modern Drip Irrigation Setup", author: "Punjab Agri Univ.", views: "12K", duration: "5:30", image: "url1" },
    { id: 2, title: "Identifying Whitefly in Cotton", author: "Dr. RS Singh", views: "8.5K", duration: "3:45", image: "url2" },
    { id: 3, title: "Organic Fertilizer Preparation", author: "Kisan TV", views: "20K", duration: "12:00", image: "url3" }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "screen-layout bg-muted" }, /* @__PURE__ */ React.createElement("div", { className: "screen-topbar" }, /* @__PURE__ */ React.createElement(Header, { title: "Learning Hub", showHamburger: true })), /* @__PURE__ */ React.createElement("div", { className: "screen-body" }, /* @__PURE__ */ React.createElement("div", { className: "screen-content pb-nav" }, /* @__PURE__ */ React.createElement("div", { className: "search-bar mt-2 bg-inner border-0" }, /* @__PURE__ */ React.createElement(Search, { size: 20, className: "text-muted" }), /* @__PURE__ */ React.createElement("input", { type: "text", placeholder: "Search videos or articles..." }), /* @__PURE__ */ React.createElement(Filter, { size: 20, className: "text-primary" })), /* @__PURE__ */ React.createElement("div", { className: "expert-categories mt-4" }, /* @__PURE__ */ React.createElement("button", { className: "tag active" }, "All"), /* @__PURE__ */ React.createElement("button", { className: "tag" }, "Trending"), /* @__PURE__ */ React.createElement("button", { className: "tag" }, "Crop Focus"), /* @__PURE__ */ React.createElement("button", { className: "tag" }, "Tech & Tools")), /* @__PURE__ */ React.createElement("div", { className: "learning-grid mt-4" }, videos.map((video) => /* @__PURE__ */ React.createElement("div", { key: video.id, className: "card video-card" }, /* @__PURE__ */ React.createElement("div", { className: "video-thumbnail" }, /* @__PURE__ */ React.createElement(PlayCircle, { size: 32, color: "#FFFFFF", className: "play-icon" }), /* @__PURE__ */ React.createElement("span", { className: "duration-badge" }, video.duration)), /* @__PURE__ */ React.createElement("div", { className: "p-3" }, /* @__PURE__ */ React.createElement("h4", { className: "video-title" }, video.title), /* @__PURE__ */ React.createElement("div", { className: "flex-row-between mt-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-muted" }, video.author), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-muted" }, video.views, " views"))))))), /* @__PURE__ */ React.createElement("div", { className: "screen-bottomnav" }, /* @__PURE__ */ React.createElement(BottomTabs, null))));
}
export {
  Learning as default
};
