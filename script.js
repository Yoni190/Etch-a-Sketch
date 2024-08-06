const container = document.querySelector("#container");
const change = document.querySelector("button");


let gridSize = 16;

change.addEventListener("click", ()=>{
    let size = prompt("Enter a size from 1-100");
    if(size>100){
        alert("100 is the limit");
    }
    else{
        gridSize = size;
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
});

function createGrid(gridSize){
    blockHeight = 400/gridSize;
    blockWidth = 400/gridSize;
    for(let i = 0; i< (gridSize * gridSize); i++){
        const temp = document.createElement("div");
        temp.className = "block";
        temp.style.border = "1px solid black";
        temp.style.height = blockHeight +"px";
        temp.style.width = blockWidth +"px";
        temp.addEventListener("mouseover", ()=>{
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            temp.style.backgroundColor = randomColor;
        });
        container.appendChild(temp);
    }
}
createGrid(gridSize);