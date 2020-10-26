import React from 'react';
import './App.css';
import { Editor } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Whysiwyg Rich Editor</p>
        <Editor />
      </header>
    </div>
  );
}

export default App;
