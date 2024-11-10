import React from 'react';
// import { Render } from 'react-dom';
import ReactDOM from 'react-dom';
import './style.css';

const Greeting = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      <div id="image"></div>
    </div>
  );
};

const rootElement = document.getElementById('target');
const root = ReactDOM.createRoot(rootElement);

root.render(<Greeting />);
