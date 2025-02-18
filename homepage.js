const middleColumn = () => {
  console.log("Middle column =", middleColumn);
};

middleColumn();

const hideColumn = (columnId) => {
  console.log("id =", columnId);
  let column = document.getElementById(columnId);
  if (column.style.display === "none") {
    column.style.display = "flex";
  } else {
    column.style.display = "none";
  }
};
