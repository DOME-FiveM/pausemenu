import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./css/App.css";
import "./css/Scrollbar.css";

import Report from "./Components/Report";
import GTASettings from "./Components/GTASettings";
import Settings from "./Components/Settings";
import Safezone from "./Components/Safezone";
import Discord from "./Components/Discord";
import Shop from "./Components/Shop";

function App() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleUIUpdates = (event: any) => {
      if (event.data.type === "updateStats") {
        console.log("Updating stats");
        var usernameElement = document.getElementById("username");
        var accountIdElement = document.getElementById("account_id");
        var playtimeElement = document.getElementById("playtime");
        var killsElement = document.getElementById("kills");
        if (usernameElement && event.data.username) {
          usernameElement.textContent = event.data.username;
        }
        if (accountIdElement && event.data.id) {
          accountIdElement.textContent = event.data.id;
        }
        if (playtimeElement && event.data.playtime) {
          playtimeElement.textContent = event.data.playtime;
        }
        if (killsElement && event.data.kills) {
          killsElement.textContent = event.data.kills;
        }
      }
    };

    const handleHideUI = (event: any) => {
      if (event.data.type === "hideui") {
        console.log("Hiding UI");
        setHidden(true);
      } else if (event.data.type === "showui") {
        console.log("Showing UI");
        setHidden(false);
      } else if (event.data.type !== "showui" && event.data.type !== "hideui" && event.data.type !== "updateStats") {
        console.error("Ooops, what u tryna do...");
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === "Escape") {
        setHidden((hidden) => !hidden);
      }
    };

    function removeEventListeners() {
      window.removeEventListener("message", handleUIUpdates); // THIS ADDS THE EVENT LISTENER
      window.removeEventListener("message", handleHideUI);
      window.removeEventListener("keyup", handleKeyUp);
    }

    window.addEventListener("keyup", handleKeyUp); // THIS ADDS THE EVENT LISTENER
    window.addEventListener("message", handleHideUI); // THIS ADDS THE EVENT LISTENER
    window.addEventListener("message", handleUIUpdates); // THIS ADDS THE EVENT LISTENER
    return () => removeEventListeners(); // THIS REMOVES THE EVENT LISTENERs ON CLEANUP
  }, []);

  return (
    <div className={`background ${hidden ? "" : "visible"}`}>
      {!hidden && (
        <div className="grid_container">
          <Shop setHidden ={setHidden} />
          <Discord setHidden ={setHidden} />
          <Safezone setHidden ={setHidden} />
          <Settings setHidden ={setHidden} />
          <GTASettings setHidden ={setHidden} />
          <Report setHidden ={setHidden} />
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
