import { getPaintingSet } from "./paintings.js";

// Get set for the rounds
let paintings = getPaintingSet("impressionism",3);
console.log(paintings[1])

document.getElementById("app").innerHTML = `
<img height = 512 src="${paintings[0][1]}"/>
`