import { useState, useRef, useEffect } from "react"; 
import "./App.css";

function App() { 
  // Reference for input and result display
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  
  // State to hold the current result of calculations
  const [result, setResult] = useState(0); 
  
  // State to manage dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // Effect to update the body class based on dark mode state
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // Function to handle addition
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 

  // Function to handle subtraction
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };

  // Function to handle multiplication
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 

  // Function to handle division
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };

  // Function to reset the input field
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  }; 

  // Function to reset the result and input field
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
    inputRef.current.value = 0; 
  }; 

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult} className="reset">reset result</button>
        <button type="button" onClick={() => setIsDarkMode(!isDarkMode)} className="light-mode">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </form> 
    </div> 
  ); 
} 

export default App;
