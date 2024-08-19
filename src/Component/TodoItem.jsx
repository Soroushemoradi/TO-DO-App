// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function TodoItem({ children, ...props }) {
  return (
    <li {...props} className="text-white mb-4 p-1 border rounded-md"  >
      {children}
    </li>
  );
}

export default TodoItem;
