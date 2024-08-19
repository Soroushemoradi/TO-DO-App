import { useContext } from 'react'
import TodoItem from './TodoItem';
import Button from './Button';
import { StoreContext } from '../context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoRender() {
  const { deleteTodo, editHandler, tasks } = useContext(StoreContext)
  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          return (
            <TodoItem key={index} style={{ backgroundColor: task.background }}>
              {task.text}
              <Button onClick={() => editHandler(index)} className="float-right ms-3" >
              <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button onClick={() => deleteTodo(task)} className="float-right">
                <FontAwesomeIcon icon={faTrashCan}/>
              </Button>
            </TodoItem>
          );
        })}
      </ul></>
  )
}

export default TodoRender