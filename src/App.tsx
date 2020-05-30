import React, { useState } from 'react';
import './App.css';
import {Picture} from './Picture'

function App() {

  return (
    <div className="App">
      <Picture imgScr={["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg"]} altText=""></Picture>
    </div>
  );
}

export default App;
