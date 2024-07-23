// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p_red = document.createElement("p")
p_red.textContent = "Hey I'm red!";
p_red.style.color = "red";
container.appendChild(p_red);


const border_div = document.createElement("div");
border_div.style.backgroundColor = "pink";
border_div.style.border = "1px solid black";
container.appendChild(border_div);

const h1_elem = document.createElement("h1");
h1_elem.textContent = "I'm in a div";
border_div.appendChild(h1_elem);

const p_elem = document.createElement("p");
p_elem.textContent = "ME TOO!";
border_div.appendChild(p_elem);
container.appendChild(border_div);

function alertFunction () {
    alert("YIPPEE YOU DID IT!")
}
const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

