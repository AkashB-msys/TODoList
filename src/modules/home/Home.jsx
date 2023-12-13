import React, { useEffect, useState } from "react";
import Tab from "../../compontents/tabs/Tab";
import Cardrender from "../../compontents/cardrender/Cardrender";
import "./Home.css";
import Detail from "./detail/Detail";
import cardData from "../../assets/icons/data/cardData";

function Home({ str }) {
  const [details, setDetails] = useState({});
  const handleCard = (card) => setDetails(card);
  const [filterItem, setFilter] = useState([]);
  const [cardTitle, setCardTitle] = useState("All");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let n = localStorage.getItem("notes");
    if (n) {
      setNotes(JSON.parse(n));
    } else {
      localStorage.setItem("notes", JSON.stringify(cardData));
      setNotes(cardData);
    }
  }, []);


  useEffect(() => {
    if (notes.length > 0) {
      setFilter(notes);
      setDetails(notes[0]);
    }
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) {
      const data = cardData.filter((item) =>
        item.title.toLowerCase().includes(str.toLowerCase())
      );
      let filterItem = data.filter((item) => {
        if (cardTitle === "All") return true;
        return item.type === cardTitle;
      });
      setFilter(filterItem);
      setDetails(filterItem[0] || {});
    }
  }, [str]);

  const filerData = (key) => {
    let filterItem = notes.filter((item) => {
      if (key === "All") return true;
      return item.type === key;
    });
    setFilter(filterItem);
    setCardTitle(key);
    setDetails(filterItem[0]);
  };

  return (
    <div className="wrapper">
      <Tab data={notes} filerData={filerData} cardData={notes} />
      <Cardrender
        onClick={handleCard}
        title={`${cardTitle} Notes`}
        data={filterItem}
      />
      <Detail data={details} />
    </div>
  );
}

export default Home;
