import logo from "./logo.svg";
import "./App.css";
import Abstract from "./components/Abstract";
import Title from "./components/Title";
import Optimizations from "./components/TechnicalApproach/Optimization";
import ClothModels from "./components/TechnicalApproach/ClothModels";
import WindEffect from "./components/TechnicalApproach/WindEffect";

function App() {
  return (
    <div className="bg-warning">
      <Title />
      <Abstract />
      <Optimizations />
      <ClothModels />
      <WindEffect />
    </div>
  );
}

export default App;
