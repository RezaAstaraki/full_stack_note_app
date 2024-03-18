import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import NoteLisPage from "./pages/noteListpage/NodeListPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route Component={NoteLisPage} path="notes" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
