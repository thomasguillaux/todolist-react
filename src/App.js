import './App.css';
import Line from './Line'
import Header from './Header'
import { useState } from "react";
import {FaPlus} from "react-icons/fa"

function App() {

const [todos, setTodos] = useState([])
const [result, setResult] = useState("")
const [amount, setAmount] = useState(0)
const [remaining, setRemaining] = useState(0)
const [done, setDone] = useState(0)

  
const remainingTodos = () => {
  let counter = 0;
  for (let i = 0; i < todos.length; i++) {
  if (todos[i].status === false) 
  counter++
  setRemaining(counter)
}
}

const doneTodos = () => {
  let counter = 0;
  for (let i = 0; i < todos.length; i++) {
  if (todos[i].status === true) 
  counter++
  setDone(counter)
}
}

const handleSubmit =(event) => {

  event.preventDefault();

  const newTodo= [...todos];

  if (result) {
    newTodo.push({todo: result, status: false})
    setTodos(newTodo)
    setResult("");
    setAmount(amount + 1);
    setRemaining(remaining + 1)
  } else {
    alert("Please fill in the task to do")
  } 
}


  return (
  <div className="App">
    <div className="container" >
        <Header 
          todos={todos}
          amount={amount}
          remaining={remaining}
          done={done}/>

        <form onSubmit={handleSubmit}>
          <input placeholder="Enter your new task" className="todo__field" type="text" value={result} onChange={(event) => {
          const input = event.target.value
          setResult(input);
          }}/>
        
        <button type="submit" className="app__button"><FaPlus/></button>
        </form>        

        <div>
          {todos.map((elem, index) => {
            return <Line
              todo={elem} 
              index={index} 
              key={Math.random()} 
              todos={todos}
              setTodos={setTodos}
              amount={amount}
              setAmount={setAmount}
              remaining={remaining}
              setRemaining={setRemaining}
              remainingTodos={remainingTodos}
              done={done}
              setDone={setDone}
              doneTodos={doneTodos}/>
          })}
        </div>

      </div>
      
    </div>
  );
}

export default App;
