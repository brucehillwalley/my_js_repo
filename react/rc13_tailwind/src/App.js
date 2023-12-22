import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverFocus from "./components/HoverFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typografy from "./components/Typografy";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl text-center text-purple-700 font-bold">
        Hello Tailwind
      </h1>
      {/* <Typografy /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus /> */}
      <FlexAndResponsive />
    </div>
  );
}

export default App;
