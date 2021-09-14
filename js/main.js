document.title = `Magic 8 Ball`;
const form = document.createElement("form");
const h1 = document.createElement("h1");
const userInput = document.createElement("input");
const label = document.createElement("label");
const button = document.createElement("button");
const div = document.createElement("div");
const div2 = document.createElement("div");

document.body.append(form);
form.append(h1);
form.append(label);
form.appendChild(userInput);
form.appendChild(button);
form.append(div2);
div2.append(div);

h1.innerHTML = "Magic 8 Ball";
label.innerHTML = `<br>Ask me anything!<br>`;
form.style.textAlign = "center";
button.innerHTML = `Ask`;
div.id = "answers";
answers.innerHTML = "Ask Me Again!";
div2.id = "eightBall";
function showImage(src, width, display, margin) {
  const img = document.createElement("img");
  div2.appendChild(img);
  img.src = src;
  img.style.width = width;
  img.style.display = display;
  img.style.margin = margin;
}
showImage("./images/magic8ball_start.png", "350px", "block", " auto");

button.addEventListener("click", ask());

function generateRandom(maxNumber) {
  return Math.round(Math.random() * maxNumber);
}

function ask() {
  button.addEventListener("click", (e) => {
    let randomNumber = generateRandom(3);
    let answerText = "";
    if (userInput.value == "") {
      alert("Ask the quetions");
    } else if (randomNumber == 0) {
      answerText = "Yes definitely";
    } else if (randomNumber == 1) {
      answerText = "No,certainly not";
    } else if (randomNumber == 2) {
      answerText = "I really don't care";
    } else if (randomNumber == 3) {
      answerText = "Ask again later!";
    }
    answers.innerHTML = answerText;

    e.preventDefault();
  });
}

document.body.style.backgroundColor = "rgba(67,113,35,0.596)";
