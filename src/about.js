import React from 'react';
import ReactDOM from 'react-dom';

const About = () => {
  return (
    <div>
      <h1>About Webpack</h1>
    </div>
  );
};

const rootElement = document.getElementById('target');
const root = ReactDOM.createRoot(rootElement);

root.render(<About />);
