import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Star, { Trash } from "../../assets/icons/CardIcons";
import { handleUpdate } from "../../assets/icons/utils/handlers";
import "./editoption.css";

function EditOption() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [type, setType] = useState("none");
  const [data, setData] = useState({});

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const a = notes.find((obj) => obj.id == id);
    setData(a);
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((fields) => {
      if (!fields.name) return;
      formData[fields.name] = fields.value;
    });
    formData.type = type;
    formData.date = new Date().toISOString().slice(0, 19);
    formData.id = id;
    handleUpdate(id, formData);
  };
  return (
    <div className="edit-container">
      <div className="edit-title">
        <h3>Edit Note</h3>
        <div className="icon-container">
          <span
            className={`${type === "Starred" ? "activeType" : "normal"}`}
            onClick={() => setType("Starred")}
          >
            <Star />
          </span>
          <span
            className={`${type === "Delete" ? "activeType" : "normal"}`}
            onClick={() => setType("Delete")}
          >
            <Trash />
          </span>
        </div>
      </div>
      <form onSubmit={formHandler}>
        <label htmlFor="title">
          Title <span>*</span>
        </label>
        <br />
        <input
          id="title"
          defaultValue={data.title}
          name="title"
          placeholder="Title"
          className="titleEditor"
          required
        />
        <br />
        <label htmlFor="des">
          Context <span>*</span>
        </label>
        <br />
        <input
          name="des"
          id="des"
          className="desEditor"
          defaultValue={data.des}
          placeholder="Description"
          required
        />
        <br />
        <button type="button" onClick={() => navigate("/")} className="cancel">
          Cancel
        </button>
        <button className="save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditOption;
