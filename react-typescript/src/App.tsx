import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h2>TypeScript 🚀</h2>
      <Todos items={["DevOps", "Performance"]} />
    </div>
  );
}

export default App;
