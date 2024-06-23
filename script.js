const container_div = document.getElementById("container");
/*var grid_size = 5;

for (var i = 0; i < grid_size; i++) {
    const row_div = document.createElement("div");
    row_div.classList.add("etch-row");
    for (var j = 0; j < grid_size; j++) {
        const grid_div = document.createElement("div");
        grid_div.classList.add("etch-square")
        row_div.appendChild(grid_div);
    }
    container_div.appendChild(row_div);
}*/

function create_grid(size) {
    container_div.innerHTML = '';
    for (var i = 0; i < size; i++) {
        const row_div = document.createElement("div");
        row_div.classList.add("etch-row");
        for (var j = 0; j < size; j++) {
            const grid_div = document.createElement("div");
            grid_div.classList.add("etch-square");
            grid_div.style.opacity = 0;
            /*grid_div.addEventListener("mouseover", function (e) {
                e.target.style.background = "blue";
                var cur_op = parseFloat(e.target.style.opacity) + 0.1;
                e.target.style.opacity = cur_op;
            });*/
            grid_div.addEventListener("mouseover", updateColor);
            grid_div.addEventListener("mousedown", updateColor);
            grid_div.addEventListener("mousedown", updateMouse);
            grid_div.addEventListener("mouseup", updateMouse);
            row_div.appendChild(grid_div);
        }
        container_div.appendChild(row_div);
    }
}  

create_grid(16);

const btn = document.getElementById("set-size");
btn.addEventListener("click", function() {
    let grid_size = prompt("Enter new grid size (< 100)");
    if (grid_size <= 100) {
        create_grid(grid_size);
    }
});

let mouseDown = false;

function updateMouse(e) {
    if (e.type === "mousedown") mouseDown = true;
    if (e.type === "mouseup") mouseDown = false;
}

function updateColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.background = "blue"; 
    e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
}