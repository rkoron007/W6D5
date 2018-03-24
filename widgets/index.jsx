import React from 'react';
import ReactDOM from 'react-dom';
import WRoot from './frontend/w_root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<WRoot />, root);
});
