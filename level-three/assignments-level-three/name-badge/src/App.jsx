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

  //Checks to make sure that all input fields are filled out so that submit button will function
  const isFormValid =
    formData.firstName.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.length > 0 &&
    formData.birthPlace.length > 0 &&
    formData.phone.length > 0 &&
    formData.favFood.length > 0 &&
    formData.comments.length > 0;

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

    //Clears form data after submit event fires
    for (let i = 0; i <= 6; i++) {
      event.target[i].value = '';
    }

    //Resets formData state so that the button will be unavailable again until all of the input fields are completed.
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: '',
      comments: '',
    });
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
          isFormValid={isFormValid}
        />
      </div>
      <div className='badge--list'>{badges}</div>
    </div>
  );
}

export default App;
