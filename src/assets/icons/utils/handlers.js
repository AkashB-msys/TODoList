
const handleStarClick = async (id, type) => {
  let notes = JSON.parse(localStorage.getItem("notes"));
  const index = notes.findIndex((object) => {
    return object.id === id;
  });
  if (notes[index].type === type) {
    notes[index].type = "none";
  } else if (notes[index].type === "none") {
    notes[index].type = type;
  } else {
    notes[index].type = type;
  }
  await localStorage.setItem("notes", JSON.stringify(notes));
  window.location.reload();
};
export default handleStarClick;

export const handleUpdate = async (id, obj) => {
  let notes = JSON.parse(localStorage.getItem("notes"));
  const index = notes.findIndex((object) => {
    return object.id == id;
  });
  notes[index] = obj;
  await localStorage.setItem("notes", JSON.stringify(notes));
  window.location.href = '/';
};

export const handleAdd = async ( obj) => {
  let notes = JSON.parse(localStorage.getItem("notes"));
  notes.push(obj);
  await localStorage.setItem("notes", JSON.stringify(notes));
  window.location.href = "/";
};
