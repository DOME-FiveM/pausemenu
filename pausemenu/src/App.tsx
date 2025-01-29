// Import required React stuff
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS
import "./App.css";
import "./Scrollbar.css";

// Import Modules
import Report from "./Report";
import GTASettings from "./GTASettings";
import Settings from "./Settings";
import Safezone from "./Safezone";
import Discord from "./Discord";
import Shop from "./Shop";

function App() {
  return (
    <div className="grid_container">
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
