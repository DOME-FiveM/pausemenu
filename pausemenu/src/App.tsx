import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import "./Scrollbar.css";

import Report from "./Report";
import GTASettings from "./GTASettings";
import Settings from "./Settings";
import Safezone from "./Safezone";
import Discord from "./Discord";
import Shop from "./Shop";

function App() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHideUI = (event : any) => {
      if (event.data === "hideui") {
        console.log("Hiding UI")
        setHidden(true);
      }
      else if (event.data === "showui") {
        console.log("Showing UI")
        setHidden(false);
      }
    };

    window.addEventListener("message", handleHideUI);
    return () => window.removeEventListener("message", handleHideUI);
  }, []);

  return (
    <div className="grid_container" style={{ display: hidden ? "none" : "grid" }}>
      <Shop />
      <Discord />
      <Safezone />
      <Settings />
      <GTASettings />
      <Report />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
