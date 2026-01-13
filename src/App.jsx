import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Todo from "./Todo";
import ThemeToggle from "./ThemeToggle";
import SimpleForm from "./SimpleForm";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>React SPA Experiments</h1>

        <nav>
          <Link to="/">Counter</Link>
          <Link to="/todo">To-Do</Link>
          <Link to="/theme">Theme</Link>
          <Link to="/form">Form</Link>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/todo" element={<Todo />} />
            <Route
              path="/theme"
              element={<ThemeToggle theme={theme} setTheme={setTheme} />}
            />
            <Route path="/form" element={<SimpleForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
