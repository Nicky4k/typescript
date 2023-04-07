import "./App.css";
import Todos from "./components/Todos";
import ToDo from "./models/todo";

function App() {
  let startDate: Date = new Date();
  console.log(startDate);
  const todos = [
    new ToDo("DevOps", 1),
    new ToDo("React Native", 2),
    new ToDo("Jenkins", 3),
  ];
  const num = "literal type";

  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  return (
    <div className="App">
      <h2>TypeScript 🚀 {num}</h2>
      <p>{startDate.getFullYear()}</p>
      <p>{addNumbers(10, 90)}</p>
      <Todos items={todos} />
    </div>
  );
}

export default App;

console.log(1);
Promise.resolve(3)
  .then((res) => {
    console.log(res);
    return 4;
  })
  .then((res) => console.log(res));
setTimeout(() => console.log(2), 0);
console.log(5);
