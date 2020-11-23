// Write your code here!
let element = document.createElement("div");
let name = prompt("ur name?");
element.innerHTML = "<h1> Hello, ${name}</h1> <p> i may order a coffee today with cookies beside ..</p> <h3> thank you ! </h3>";
document.body.appendChild(element);
