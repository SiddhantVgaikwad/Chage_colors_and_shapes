import "./styles.css";
const colors = ['blue', 'green', 'yellow', 'red'];
const shapes = ['square', 'circle', 'triangle'];

// Get references to the HTML elements we'll use
const app = document.getElementById('app');
const changeCBtn = document.getElementById('changeColors');
const changeSBtn = document.getElementById('changeShapes');
const feedback = document.getElementById('feedback');

// Set the initial color and shape
let currentColor = colors[0];
let currentShape = shapes[0];

// Create a function to change the color randomly
function changeColor() {
  currentColor = colors[Math.floor(Math.random() * colors.length)];
  app.style.backgroundColor = currentColor;
}

// Create a function to change the shape randomly
function changeShape() {
  currentShape = shapes[Math.floor(Math.random() * shapes.length)];
  app.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const newShape = document.createElement('div');
    newShape.classList.add(currentShape);
    app.appendChild(newShape);
  }
}

// Add event listeners to the buttons
changeCBtn.addEventListener('click', function() {
  changeColor();
  feedback.innerText = '';
});

changeSBtn.addEventListener('click', function() {
  changeShape();
  feedback.innerText = '';
});

// Add an event listener to the game area to check the user's answer
app.addEventListener('click', function(event) {
  const clickedShape = event.target.classList[0];
  if (clickedShape === currentShape && app.style.backgroundColor === currentColor) {
    feedback.innerText = 'Correct!';
  } else {
    feedback.innerText = 'Incorrect, try again.';
  }
});
