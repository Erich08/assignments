import { useState } from 'react';
import Css from './components/Css';
import './App.css';

function App() {
  const [options, setOptions] = useState({
    color1: '#FFA435',
    color2: '#FF2342',
    degrees: 90,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]: value,
      };
    });
  };
  return (
    <div className='App'>
      <Css handleChange={handleChange} options={options} />
    </div>
  );
}

export default App;
