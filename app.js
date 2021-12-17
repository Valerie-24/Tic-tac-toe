var container = document.getElementById("grid");

var cell = document.createElement("div");

cell.innerHTML = "TEXT";

container.appendChild(cell);

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#container").append("<div class = 'grid'></div");
    };
  };
  $(".grid").width(150/x);
$(".grid").height(150/x);
};


function clearGrid() {
  $(".grid").remove();
};
