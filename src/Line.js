import {FaTrash} from 'react-icons/fa'

const Line = ({todo, todos, setTodos, index, amount, setAmount, remaining, setRemaining, remainingTodos, done, setDone, doneTodos}) => {

    return(

       <div className="todo__item">

            <input 
                type="checkbox"
                checked={todo.status}
                onChange={() => {
                const newTodos = [...todos]
                newTodos[index].status = !newTodos[index].status
                setTodos(newTodos)
                remainingTodos()
                doneTodos()
                }}
                
            />

            <span className="task"style={{textDecoration : todo.status ? "line-through" : ""}}>
                {todo.todo}
            </span>

       

           <button 
                className="delete__todo" 
                onClick={() => {
                    const newTodos = [...todos]
                    newTodos.splice(index, 1)
                    setTodos(newTodos)
                    setAmount(amount - 1)
                    setDone(done -1)      
                    setRemaining(remaining -1)   
            }}>
            <FaTrash/>
            </button>
        </div>

         )
}

export default Line;