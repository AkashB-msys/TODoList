import React, { useState, useEffect } from "react";
import "./Tab.css";

function Tab({ filerData, cardData }) {
  const tabData = ["All", "Starred", "Delete"];
  const [active, setActive] = useState(tabData[0]);
  const [map, setMap] = useState({});
  useEffect(() => {
    let obj = {};
    cardData.map((item) => {
      if (obj[item.type] === undefined) {
        obj[item.type] = 1;
      } else {
        obj[item.type] += 1;
      }
    });
    obj["All"] = cardData.length;
    setMap(obj);
  }, [cardData]);

  return (
    <div className="tabcontainer">
      {tabData.map((item,index) => (
        <div
          key={index}
          onClick={() => {
            setActive(item);
            filerData(item);
          }}
          className={`tab ${active === item && "active"}`}
        >
          <p>
            {item}({map[item]})
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tab;
