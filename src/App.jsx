import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { GroupProvider } from "./context/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
