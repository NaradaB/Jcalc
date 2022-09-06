import "./App.css";
import NavBar from "./components/NavBar";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
  return (
    <div className="App h-screen w-screen bg-bgColor">
      <NavBar></NavBar>
      <div className="h-screen w-screen flex justify-center relative ">
        <div className="flex absolute top-1/3 ">
          <Inputs></Inputs>
          <Results></Results>
        </div>
      </div>
    </div>
  );
}

export default App;
