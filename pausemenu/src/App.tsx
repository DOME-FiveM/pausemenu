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
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleHideUI = (event: any) => {
      if (event.data === "hideui") {
        console.log("Hiding UI");
        setHidden(true);
      } else if (event.data === "showui") {
        console.log("Showing UI");
        setHidden(false);
      } else {
        console.error("Ooops, what u tryna do...");
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === "Escape") {
        setHidden(true);
      }
    };

    function removeEventListeners() {
      window.removeEventListener("message", handleHideUI);
      window.removeEventListener("keyup", handleKeyUp);
    }

    window.addEventListener("keyup", handleKeyUp); // THIS ADDS THE EVENT LISTENER
    window.addEventListener("message", handleHideUI); // THIS ADDS THE EVENT LISTENER
    return () => removeEventListeners(); // THIS REMOVES THE EVENT LISTENERs ON CLEANUP
  }, []);

  return (
    <div className={`background ${hidden ? "" : "visible"}`}>
      {!hidden && (
        <div className="grid_container">
          <Shop />
          <Discord />
          <Safezone />
          <Settings />
          <GTASettings />
          <Report />
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
