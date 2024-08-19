import React from 'react';
import TodoList from './Component/TodoList';
import AppContext from './context/AppContext';
const App = () => {
  return(
    <AppContext>
    <TodoList></TodoList>
    </AppContext>
  )
};

export default App;

  // const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState('');

  // const addTask = () => {
  //   if (newTask.trim() === '') return;
  //   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  //   setTasks([...tasks, { text: newTask, background: randomColor }]);
  //   setNewTask('');
  // };

  // return (
  //   <div className="app">
  //     <h1>To-Do List</h1>
  //     <div className="input-container">
  //       <input
  //         type="text"
  //         value={newTask}
  //         onChange={(e) => setNewTask(e.target.value)}
  //         placeholder="Add a new task"
  //       />
  //       <button onClick={addTask}>Add</button>
  //     </div>
  //     <ul className="task-list">
  //       {tasks.map((task, index) => (
  //         <li key={index} style={{ backgroundColor: task.background }}>
  //           {task.text}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

// <div className="group bg-slate-400 flex-col ">
// <span className="hover:text-green-300 transition-all duration-1000">3466654645645</span>
// <span className="group-hover:text-red-700">3466654645645</span>
// <span className="max-md:text-red-700 -mt-2">3466654645645</span>
// <span>3466654645645</span>
// <span>3466654645645</span>
// <span>3466654645645</span>
// <span className="hover:-translate-y-[0.375rem]">3466654645645</span>
// <span className="text-[#673512] text-sm">3466654645645</span>
// <span>3466654645645</span>
// <span>3466654645645</span>
// <input className="placeholder:text-red-500" placeholder="sfdfgdg"/>
// </div>
//   <div onClick={()=>console.log(Date.now())} className="grid grid-cols-3 gap-4">
//     <div className=" bg-red-500 animate-bounce">1</div>
//     <div className=" bg-green-500">2</div>
//     <div className=" bg-blue-500">3</div>
//     <div className=" bg-yellow-500">4</div>
//   </div>