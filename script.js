const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);

const e = document.getElementsByClassName("div1");

e.addEventListener('mouseover', "Nice to meet you!");