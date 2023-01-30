import { useState } from 'react';

import './App.css';
import BadgeForm from './components/BadgeForm';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthPlace: '',
    phone: '',
    favFood: '',
    comments: '',
  });

  console.log(formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='App'>
      <BadgeForm formData={formData} handleChange={handleChange} />
    </div>
  );
}

export default App;
