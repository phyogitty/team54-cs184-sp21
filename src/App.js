import logo from "./logo.svg";
import "./App.css";
import Abstract from "./components/Abstract";
import Title from "./components/Title";
import Optimizations from "./components/TechnicalApproach/Optimization";
import ClothModels from "./components/TechnicalApproach/ClothModels";
import WindEffect from "./components/TechnicalApproach/WindEffect";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="bg-warning">
      <TopNav />
      <div id="topNav-area"></div>
      <Title />
      <Abstract />
      <Optimizations />
      <ClothModels />
      <WindEffect />
    </div>
  );
}

export default App;
