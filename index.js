//chose the middle element, stored to a variable and logged to the console
const middleColumn = document.getElementById("middle-column");
console.log("Middle column =", middleColumn);

// this toggles the middle column by looking for the columnId - which is this case, is 'middle-column' in the html
const hideColumn = (columnId) => {
  // document.getElemntById returns the html with the id of 'middle-column'
  const column = document.getElementById(columnId);
  // if the column is displaying none, we can toggle it to flex, which makes the middle column visable again, or change it back to none, which hides the column again
  if (column.style.display === "none") {
    column.style.display = "flex";
  } else {
    column.style.display = "none";
  }
};
