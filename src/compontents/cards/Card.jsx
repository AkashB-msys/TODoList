import React from "react";
import Star from "../../assets/icons/CardIcons";
import { Trash } from "../../assets/icons/CardIcons";
import handleStarClick from "../../assets/icons/utils/handlers";
import "./Card.css";

function Card({ title, des, active, type, index }) {
  const cardtype = {
    Starred: "activeStar",
    none: "normal",
    Delete: "normal",
  };

  return (
    <div className={`cardContainer ${active && "cardactive"}`}>
      <div className="titleContainer">
        <p>
          {title || ""}{" "}
          {type === "Delete" && <span className="delete">Delete</span>}
        </p>
        <div className={`icons ${cardtype[type]}`}>
          <span onClick={() => handleStarClick(index, "Starred")}>
            <Star />
          </span>
          <span onClick={() => handleStarClick(index, "Delete")}>
            <Trash />
          </span>
        </div>
      </div>
      <p className="des">{des || ""}</p>
    </div>
  );
}

export default Card;
