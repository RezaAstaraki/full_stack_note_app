import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import NoteLisPage from "./pages/noteListpage/NoteListPage";
import NotePage from "./pages/notePage/NotePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route Component={NoteLisPage} path="/notes" />
            <Route Component={NotePage} path="/notes/:id" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
