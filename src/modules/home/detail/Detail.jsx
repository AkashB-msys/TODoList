import React from "react";
import "./Detail.css";
import Star, { Edit, Trash } from "../../../assets/icons/CardIcons";
import { Link } from "react-router-dom";
import handleStarClick from "../../../assets/icons/utils/handlers";

function Detail({ data = {} }) {
  return (
    Object.keys(data).length > 0 && (
      <div className="totalContainer">
        <div className="titleContainer">
          <div>
            <p className="displayContent">{data.title}</p>
            <span className="time">{data.date}</span>
          </div>
          <div className="name  c_one">
            <Link to={`/${data.id}`} className="Link">
              <Edit />
            </Link >
            <span onClick={() => handleStarClick(data.id, "Starred")}>
              <Star />
            </span>
            <span onClick={() => handleStarClick(data.id, "Delete")}>
              <Trash />
            </span>
          </div>
        </div>

        <p className="describtion">{data.des}.</p>
      </div>
    )
  );
}

export default Detail;
