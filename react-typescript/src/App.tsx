import "./App.css";
import Todos from "./components/Todos";
import ToDo from "./models/todo";

function App() {
  const todos = [
    new ToDo("DevOps", 1),
    new ToDo("React Native", 2),
    new ToDo("Jenkins", 3),
  ];
  return (
    <div className="App">
      <h2>TypeScript 🚀</h2>
      <Todos items={todos} />
    </div>
  );
}

export default App;
