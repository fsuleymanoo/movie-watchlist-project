import { useEffect, useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
function Themetoggler() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <button className="btn" onClick={themeToggler}>
      {theme === "light" ? <MdWbSunny /> : <FaMoon />}
    </button>
  );
}

export default Themetoggler;
