import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";

export const server = "https://nodejstodos.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [allTask, setAllTask] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        allTask,
        setAllTask,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher pos={"fixed"} top={"4"} right={"4"} />
      <AppWrapper />
    </ChakraProvider>
  </React.StrictMode>
);
