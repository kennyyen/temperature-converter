import { useEffect, useState } from "react";
import CONSTANTS from "../Constants";

const { THEME, LIGHT, DARK } = CONSTANTS;

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(LIGHT);

  const setMode = (mode: string) => {
    window.localStorage.setItem(THEME, mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === LIGHT ? setMode(DARK) : setMode(LIGHT);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, themeToggler];
};
