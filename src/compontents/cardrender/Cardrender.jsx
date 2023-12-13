import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import "./Cardrender.css";

function Cardrender({ title, data, onClick }) {
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => setActiveCard(0), [data]);
  return (
    <div className="cardlistcontainer">
      <p className="title">{title}</p>
      {data.length > 0 ? (
        <div className="cards">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveCard(index);
                onClick(item);
              }}
            >
              <Card active={index === activeCard} index={item.id} {...item} />
            </div>
          ))}
        </div>
      ) : (
        <>No Notes Found</>
      )}
    </div>
  );
}

export default Cardrender;
