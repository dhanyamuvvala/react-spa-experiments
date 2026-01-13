import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="big-container">
      <h2 className="big-title">To-Do List</h2>

      <div className="btn-group">
        <input
          className="big-input"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="big-btn" onClick={addTask}>
          Add
        </button>
      </div>

      {tasks.map((t, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <span>{t}</span>
          <button
            className="big-btn"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
