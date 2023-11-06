import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import store from "./App/Store";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Filter from "./Components/Filter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <Filter />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

