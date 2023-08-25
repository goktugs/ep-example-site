import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <div className="flex h-full w-full flex-col bg-main-purple">
      <App />
    </div>
  </>,
);
