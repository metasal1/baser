import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleInputChangeA = (event) => {
    const bb = btoa(event.target.value);
    setA(bb);
  };

  const handleInputChangeB = (event) => {
    try {
      const aa = atob(event.target.value);
      setB(aa);
    } catch (e) {
      setB('Invalid base64 string');
    }
  };

  const handleClearA = () => {
    setA('');
    document.getElementById('encode').value = '';
  };

  const handleClearB = () => {
    setB('');
    document.getElementById('decode').value = '';
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Baser</h1>

        <h3>Encode</h3>
        <input id="encode" type="text" onChange={handleInputChangeA} />
        <button onClick={handleClearA}>Clear</button>

        <span
          onClick={() => handleCopyToClipboard(a)}
          style={{ cursor: 'pointer' }}
        >
          {a}
        </span>

        <h3>Decode</h3>
        <input id="decode" type="text" onChange={handleInputChangeB} />
        <button onClick={handleClearB}>Clear</button>

        <span
          onClick={() => handleCopyToClipboard(b)}
          style={{ cursor: 'pointer' }}
        >
          {b}
        </span>

        <ToastContainer />
      </header>
      <footer>Salim Karim | <a href="mailto:salim@outlook.com.au">email</a> | <a href="https://github.com/">github</a> </footer>
    </div>
  );
}

export default App;
