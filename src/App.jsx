import Todo from "./components/Todo";
import Weather from "./components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/weather" element={<Weather />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
