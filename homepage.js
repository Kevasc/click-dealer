//chose the middle element, stored to a variable and logged to the console
const middleColumn = document.getElementById("middle-column");
console.log("Middle column =", middleColumn);

const hideColumn = (columnId) => {
  console.log("id =", columnId);
  let column = document.getElementById(columnId);
  if (column.style.display === "none") {
    column.style.display = "flex";
  } else {
    column.style.display = "none";
  }
};
