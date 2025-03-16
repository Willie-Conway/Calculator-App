import React from 'react'; // Import the React library for building user interfaces
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library for rendering the app to the DOM
import './index.css'; // Import global CSS styles for the application
import App from './App'; // Import the main App component that contains the app's logic and UI
import reportWebVitals from './reportWebVitals'; // Import a tool for measuring performance metrics

// Create a root DOM node using the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode to help highlight potential problems in the application
root.render(
  <React.StrictMode>
    <App /> // The main component that will be rendered
  </React.StrictMode>
);

// Optional: Call the performance measuring function to log results or send to an analytics endpoint
reportWebVitals();


