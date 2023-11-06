import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/Slice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim() !== "") {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
      setTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
