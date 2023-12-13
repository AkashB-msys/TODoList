import "./App.css";
import EditOption from "./compontents/editoption/EditOption";
import Nav from "./compontents/navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/home/Home";
import { useState } from "react";
import AddNotes from "./modules/addnotes/AddNotes";

function App() {
  const [searchString, setSearchString] = useState("");

  const updateString = (str) => setSearchString(str.target.value);

  return (
    <div>
      <BrowserRouter>
        <Nav updateString={updateString} />
        <Routes>
          <Route path="/" element={<Home str={searchString} />} />
          <Route path="/:id" element={<EditOption />} />
          <Route path="/addnotes" element={< AddNotes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
