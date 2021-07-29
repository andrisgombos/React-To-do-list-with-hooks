import Header from "../src/components/header"
import Todolist from "./components/todolist";
import './App.css';

function App() {
  return (
    <>
      <Header name="User" partner="Second user"></Header>
      <Todolist/>
      
    </>
  );
}

export default App;
