import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GroupProvider } from "./context/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GroupProvider>
      <App />
    </GroupProvider>
  </StrictMode>
);
