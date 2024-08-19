import AddTodo from "./AddTodo";
import TodoRender from "./TodoRender";
function TodoList() {



  return (
    <>
      <div className="self-center	p-6 bg-slate-950 rounded-md w-[41%]">
        <h1 className="text-white text-center text-xl	mb-6 ">Feeling productive today?</h1>
        <div className="w-full flex">
          <AddTodo />
        </div>
        <TodoRender />
      </div>
    </>
  );


}

export default TodoList;