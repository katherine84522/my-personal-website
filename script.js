const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);

const e = document.getElementById("cats");

e.addEventListener('mouseover', function () {
    displayQuote("Nice to meet you!");
});