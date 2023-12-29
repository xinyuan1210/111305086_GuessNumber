// Global variable
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // If the answer is correct
  if (parseInt(userGuess) === secretNumber) {
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    alert("Congratulations! You guessed the correct number!");
  }
  // If the answer is wrong
  else {
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
    alert("Sorry, try again!");
  }

  // Generate a new random number for the next round
  secretNumber = generateRandomNumber();

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}

// Event listener for Enter key
// Event listener for Enter key
function handleE(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkGuess();
  }
}



// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("checkButton").click();
//   }
// });