import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // creating intial object with empty values 
  //  newTask is current value and 
  // setNewTask is a function to updated  state value
  const [newTask, setNewTask] = useState({
    name: "",
    description: ""
    // for name  and description properties we can give default values
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, newTask]);
    

    setNewTask({ name: "", description: "" });
  };

  const handlecancel = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Task Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={newTask.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Task Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button type="submit">Add Task</button>
        </div>
      </form>
      <div></div>
      <div className="task-list">
        <h2> Added List: </h2>
        {tasks.length === 0 ? (
          <p>No list available</p>
        ) : (
          <ul> 
            {tasks.map((task, index) => (
              <li key={index}>

                <strong>{task.name}:</strong>     {task.description}

                <div >
                <button className="cancel_btn" onClick={() => handlecancel(index)}>cancel</button>
                </div>
              </li>
            ))}
            {/* </pre> */}
          </ul>
        )}
      </div>
    </div>
  );
}