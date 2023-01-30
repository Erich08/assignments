import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState({
    userName: '',
  });

  const [namesList, setNamesList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({ ...prevName, [name]: value }));
  };

  const handleSubmit = (userName) => {
    setNamesList((prevName) => [...prevName, userName]);
    name.userName = '';
  };

  const addName = namesList.map((name, index) => {
    return <li key={index}>{name}</li>;
  });

  return (
    <div className='App'>
      <input
        type='text'
        name='userName'
        placeholder='Enter your name'
        value={name.userName}
        onChange={handleChange}
      />
      <h1>{name.userName}</h1>
      <button onClick={() => handleSubmit(name.userName)}>Submit</button>
      <ul>{addName}</ul>
    </div>
  );
}

export default App;
