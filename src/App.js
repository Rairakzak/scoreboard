import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";
import "./style/App.css";

function App() {
  return <div className="App">
    <Title content={"Score board"}/>
    <Scoreboard/>
  </div>;
}

export default App;
