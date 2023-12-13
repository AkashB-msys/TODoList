import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import SearchBar from "./SearchBar";


function Nav({ updateString }) {
  const location = useLocation();
  return (
    <div className="container">
      <div className="navcontainer">
        <h2>Notes</h2>
        {location.pathname === "/" && (
          <SearchBar placeholder={"Search by title"} onChange={updateString} />
        )}
        
      </div>
      {
        location.pathname === "/" &&
        <Link to={'/addnotes'} className="addBtn">
        Add Notes
      </Link >

      }
      
      <div className="navbox">
        <h5 className="username">
          Welcome <span>Akash</span>{" "}
        </h5>
      </div>
    </div>
  );
}

export default Nav;
