import React from 'react';
import ReactDOM from 'react-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Webpack</h1>
    </div>
  );
};

const rootElement = document.getElementById('target');
const root = ReactDOM.createRoot(rootElement);

root.render(<Contact />);
