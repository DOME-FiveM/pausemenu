import "./App.css";
import Report from "./Report";
import GTASettings from "./GTASettings";
import Settings from "./Settings";
import Safezone from "./Safezone";
import Discord from "./Discord";
import Shop from "./Shop";

function App() {
  return (
    <div className="grid_container">
      <Shop/>
      <Discord/>
      <Safezone/>
      <Settings/>
      <GTASettings/>
      <Report/>
    </div>
  );
}

export default App;
