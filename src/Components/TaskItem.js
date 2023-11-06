import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../features/Slice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (newTitle.trim() !== "") {
      dispatch(editTask({ id: task.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.title}</span>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
