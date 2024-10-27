# Calculator App 📱

Welcome to the **Calculator App**! This project was developed as part of the **Meta Front-End Developer Professional Certificate** program. The purpose of this graded assessment was to solidify my understanding of key `React` concepts and to create a functional application that performs basic mathematical operations.

## 📖Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Code Overview](#code-overview)
- [Styling](#styling)
- [Screenshots](#screenshots)
- [License](#license)

## Introduction

The **Calculator App** is a simple web application built using `React`. It allows users to perform addition, subtraction, multiplication, and division on numbers entered via a single input field. This project helped me apply my knowledge of `React components`, `hooks`, and `event handling`.

## Features ✨

- **`Basic Operations`:** Perform addition, subtraction, multiplication, and division.
- **`User Input`:** Accept numeric input from the user.
- **`Dynamic Result` Display:** Update and display the total based on user input and selected operation.
- **`Reset Functionality`:** Reset the input field to zero.

## ⚙️Tech Stack 

- **`React`:** The main library used for building the user interface. React components were created to manage state and handle user interactions.
- **`JavaScript`:** The programming language used for writing the app's logic, including mathematical operations and state management.
- **`HTML`:** The markup language used to structure the application’s UI components.
- **`CSS`:** Used for styling the application, providing a clean and user-friendly interface.

### How Technologies Were Used

- **`React`:** The app is structured as a functional component using hooks like `useState` for managing the current result and `useRef` for accessing the input field. This approach allows for a dynamic and `responsive UI`.
- **`JavaScript`:** Core mathematical logic is implemented using simple functions that modify the state based on user input and selected operations.
- **`HTML` & `CSS`:** The layout is constructed using standard HTML elements, while `CSS` is applied to ensure a visually appealing and accessible user interface.


## Getting Started 🚀

To run the `Calculator App` locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Willie-Conway/calculator-app.git
   cd calc-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the application:**
   ```bash
   npm start
   ```
4. **Open your browser and navigate to `http://localhost:3000`.**


## Code Overview 📝
**Here is the main component of the application, `App.js`:**

```javascript
import React, { useState, useRef } from "react"; // Importing React and necessary hooks
import "./App.css"; // Importing CSS for styling

function App() {
  const inputRef = useRef(null); // Creating a reference for the input field
  const [result, setResult] = useState(0); // Initializing state to keep track of the result

  // Function to handle addition
  function plus(e) {
    e.preventDefault(); // Preventing default form submission behavior
    setResult((result) => result + Number(inputRef.current.value)); // Updating the result by adding the input value
  }

  // Function to handle subtraction
  function minus(e) {
    e.preventDefault(); // Preventing default form submission behavior
    setResult((result) => result - Number(inputRef.current.value)); // Updating the result by subtracting the input value
  }

  // Function to handle multiplication
  function times(e) {
    e.preventDefault(); // Preventing default form submission behavior
    setResult((result) => result * Number(inputRef.current.value)); // Updating the result by multiplying with the input value
  }

  // Function to handle division
  function divide(e) {
    e.preventDefault(); // Preventing default form submission behavior
    setResult((result) => result / Number(inputRef.current.value)); // Updating the result by dividing by the input value
  }

  // Function to reset the input field
  function resetInput(e) {
    e.preventDefault(); // Preventing default form submission behavior
    inputRef.current.value = 0; // Setting the input field value to 0
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input ref={inputRef} type="number" defaultValue="0" /> {/* Input field for user input */}
      <div>
        <button onClick={plus}>+</button> {/* Button for addition */}
        <button onClick={minus}>-</button> {/* Button for subtraction */}
        <button onClick={times}>×</button> {/* Button for multiplication */}
        <button onClick={divide}>÷</button> {/* Button for division */}
      </div>
      <h2>Total: {result}</h2> {/* Displaying the current total */}
      <button onClick={resetInput}>Reset</button> {/* Button to reset the input field */}
    </div>
  );
}

export default App;

```
## Styling 🎨
**The application uses simple `CSS` for styling. Here’s a snippet from `App.css`:**
```css
* {
  font-family: sans-serif; /* Setting a sans-serif font for the entire application */
}
input, button {
  font-size: 20px; /* Setting font size for input and buttons */
  padding: 10px; /* Adding padding for better spacing */
  border-radius: 5px; /* Rounding the corners of input and buttons */
}
input {
  display: block; /* Making the input field a block element */
  margin-bottom: 20px; /* Adding space below the input field */
}
button {
  border: 1px solid gray; /* Adding a gray border to buttons */
  background: whitesmoke; /* Setting a light background color */
  margin-right: 5px; /* Adding space between buttons */
}
button:nth-last-child(2), button:nth-last-child(1) {
  background: tomato; /* Changing the background color of the last two buttons */
  color: white; /* Setting text color to white */
}

```
## Screenshots 📸

## License 📄
This project is licensed under the MIT License. Feel free to modify and use the code for your own projects!

🙏Thank you for checking out my 📱Calculator App! If you have any questions or 📥feedback, feel free to reach out. 😊
