//import { StrictMode } from 'react'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <BrowserRouter basename="/todo-react">
    <App />
  </BrowserRouter>
  //</StrictMode>,
);
