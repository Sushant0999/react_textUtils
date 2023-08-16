import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3F3F3F';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <div>
      <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'></div>
      <TextForms title="Enter text here" />
    </div>
  );
}

export default App;
