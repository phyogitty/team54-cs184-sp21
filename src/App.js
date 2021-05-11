import logo from "./logo.svg";
import "./App.css";
import Abstract from "./components/Abstract";
import Title from "./components/Title";

import TopNav from "./components/TopNav";
import TechnicalApproach from "./components/TechnicalApproach";
import References from "./components/References";
import Contribution from "./components/Contribution";
import Results from "./components/Results";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="main-app main-font">
      <TopNav />
      {/* <div id="topNav-area"></div> */}
      <Title />
      <div className="center">
        {" "}
        <ReactPlayer url="https://youtu.be/ZZIFtwRmq9o" />
      </div>

      <div className="py-5" id="next-abstract"></div>
      <Abstract />
      <TechnicalApproach />
      <Results />
      <References />
      <Contribution />
    </div>
  );
}

export default App;
