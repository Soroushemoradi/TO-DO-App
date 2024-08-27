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