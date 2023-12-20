import SpacingAndSizing from "./components/SpacingAndSizing";
import Typografy from "./components/Typografy";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-center text-purple-500 font-bold">
        Hello Tailwind
      </h1>

      <Typografy />
      <p>***************************************</p>
      <SpacingAndSizing />
    </div>
  );
}

export default App;
