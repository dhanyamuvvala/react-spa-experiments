function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="big-container">
      <h2 className="big-title">Theme Toggle</h2>

      <button
        className="big-btn"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
