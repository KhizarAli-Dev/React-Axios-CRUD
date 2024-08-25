import "./App.css";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
