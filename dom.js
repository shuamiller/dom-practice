const container = document.querySelector("#container");
const redParagraph = container.createElement('p');
const thirdHeading = container.createElement('h3');
const pinkDiv = container.createElement('div');
const firstHeading = pinkDiv.createElement('h1');
const regParagraph = pinkDiv.createElement('p');

container.appendChild(redParagraph);
container.appendChild(thirdHeading);
container.appendChild(pinkDiv);
pinkDiv.appendChild(firstHeading);
pinkDiv.appendChild(regParagraph);

redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
thirdHeading.textContent = "I'm a blue h2!";
thirdHeading.style.color = "blue";
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "black";
firstHeading.textContent = "I'm in a dive";
regParagraph.textContent = "ME TOO!";