import "./App.css";
import { useEffect } from "react";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
