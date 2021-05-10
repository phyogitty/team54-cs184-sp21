import logo from "./logo.svg";
import "./App.css";
import Abstract from "./components/Abstract";
import Title from "./components/Title";

import TopNav from "./components/TopNav";
import TechnicalApproach from "./components/TechnicalApproach";
import References from "./components/References";
import Contribution from "./components/Contribution";
import Results from "./components/Results";

function App() {
  return (
    <div className=" px-5 main-app main-font">
      <TopNav />
      {/* <div id="topNav-area"></div> */}
      <Title />
      <Abstract />
      <TechnicalApproach />
      <Results />
      <References />
      <Contribution />
    </div>
  );
}

export default App;
