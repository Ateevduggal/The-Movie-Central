import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Components/context";

ReactDOM.render(
  <AppProvider>
    {/* Now we can pass data globally and any component can recieve it  and use it */}
    <App />
  </AppProvider>,
  document.getElementById("root")
);
