const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!"
container.appendChild(content);

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey, I'm red!";
container.appendChild(para);

const heading = document.createElement("h3");
heading.classList.add("blue");
heading.textContent = "I'm a blue h3";
container.appendChild(heading);

//create new div
const newDiv = document.createElement("newDiv");
newDiv.classList.add("div2");

const newContainer = document.querySelector(".div2");

const heading2 = document.createElement("h1");
heading2.textContent = "I'm in a div";
newDiv.appendChild(heading2);

const finalP = document.createElement("p");
finalP.text = "ME TOO!";
newDiv.appendChild(finalP);
