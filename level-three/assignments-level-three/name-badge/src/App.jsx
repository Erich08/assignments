import { useState } from 'react';

import './App.css';
import BadgeForm from './components/BadgeForm';
import BadgeList from './components/BadgeList';

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

  const [badgeData, setBadgeData] = useState([]);

  console.log(formData.phone);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBadgeData((prevData) => [...prevData, formData]);
  };

  const badges = badgeData.map((badge, index) => {
    return <BadgeList key={index} {...badge} />;
  });

  return (
    <div className='App'>
      <div className='badge--form'>
        <BadgeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className='badge--list'>{badges}</div>
    </div>
  );
}

export default App;
