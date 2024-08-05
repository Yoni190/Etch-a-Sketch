const container = document.querySelector("#container");

for(let i = 0; i<256; i++){
    const temp = document.createElement("div");
    temp.style.border = "2px dotted black";
    temp.style.height = "20px";
    temp.style.width = "20.3px";
    temp.addEventListener("mouseover", ()=>{
        temp.style.backgroundColor = "green";
    });
    container.appendChild(temp);
}