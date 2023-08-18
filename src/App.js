import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3F3F3F';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enable", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <div>
      <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'></div>
      <TextForms showAlert={showAlert} title="Enter text here" />
    </div>
  );
}

export default App;
