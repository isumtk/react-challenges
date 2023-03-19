import "./App.css";
import usePageBottom from "./hooks/usePageBottom";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const scrolled = usePageBottom(100);
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div>
        <p>Width</p>
        <p>{`${width}px`}</p>
      </div>
      <div>
        <p>Height</p>
        <p>{`${height}px`}</p>
      </div>
      {scrolled && <p className="styled_p">Hello</p>}
    </div>
  );
}

export default App;
