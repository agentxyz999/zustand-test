import React, { useEffect } from "react";
import AddPerson from "./components/AddPerson";
import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";
import { useUserSettingsStore } from "./Store";

const App = () => {
  const toggleDarkMode = useUserSettingsStore((state) => state.toggleDarkMode);
  const darkMode = useUserSettingsStore((state) => state.darkMode);
  const toggleDarkModeBtn = () => {
    toggleDarkMode();
  };
  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("darkMode")
      : document.querySelector("body").classList.remove("darkMode");
  }, [darkMode]);
  return (
    <>
      <button onClick={toggleDarkModeBtn}>Toggle DarkMode</button>
      <Counter />
      <AddPerson />
      <Pokemon />
    </>
  );
};

export default App;
