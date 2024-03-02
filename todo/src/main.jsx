import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import TaskListProvider from "./Contexts/Tasklist.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskListProvider>
      <App />
    </TaskListProvider>
  </React.StrictMode>
);
