// eslint-disable-next-line
import React, { useEffect } from "react";
import { createContext, useState } from "react"
export const StoreContext = createContext()

// eslint-disable-next-line
function AppContext({children}) {
  const getDataFromLocallStorage=JSON.parse(localStorage.getItem("tasks"))|| []
  const [tasks, setTasks] = useState(getDataFromLocallStorage);
  const [newTask, setNewTask] = useState('');
  const [textEdit,setTextEdit]=useState(false)

  const addText = () => {
    if (newTask === '') return;
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setTasks([...tasks, { text: newTask, background: randomColor }]);
    setNewTask('');}
    
    useEffect(()=>{
      const formattedTask = JSON.stringify(tasks)
      localStorage.setItem( "tasks", formattedTask)
    },[tasks])

    const handleChange = (event) => {
      setNewTask(event.target.value);
    }

    const deleteTodo = (taskName) => {
      const result=window.confirm(`are you sure to delete ${taskName.text} ?`);
      if(result){
        const newTextList = tasks.filter((task) => {
          if (task === taskName){
          return false;
          }
            
          else return true;
        });
        setTasks(newTextList);

      }

      
      
    };

    const editHandler=(index)=>{
      setTextEdit(index)
      setNewTask(tasks[index].text)
    }

    const editButton=()=>{
      const newTodos = [...tasks];
      newTodos[textEdit].text = newTask;
      setTasks(newTodos); 
      setTextEdit(false);  
      setNewTask("")
  }

const value={handleChange,addText,deleteTodo,editHandler,editButton,newTask,textEdit,tasks}

   return (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
  )
}

export default AppContext