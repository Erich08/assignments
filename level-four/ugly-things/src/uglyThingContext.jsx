import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const UglyThingsContext = createContext();

function UglyContextProvider(props) {
  const apiURL = 'https://api.vschool.io/Erich08/thing/';
  const [listData, setListData] = useState(null);
  const [addThing, setAddThing] = useState({
    title: '',
    description: '',
    imgUrl: '',
  });

  //Handles the information in the input fields and then sets the state of "addThing" accordingly.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddThing((prevThing) => {
      return {
        ...prevThing,
        [name]: value,
      };
    });
  };

  console.log(addThing);

  //Handles the POST request to the API on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(apiURL, addThing).then((response) => {
        setListData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    setAddThing({
      title: '',
      description: '',
      imgUrl: '',
    });
  };

  useEffect(() => {
    async function getData() {
      const apiData = await axios.get(apiURL).then((response) => {
        setListData(response.data);
      });
      return apiData;
    }
    getData();
  }, []);

  return (
    <UglyThingsContext.Provider
      value={{
        listData,
        handleChange,
        addThing,
        handleSubmit,
      }}
    >
      {props.children}
    </UglyThingsContext.Provider>
  );
}

export { UglyThingsContext, UglyContextProvider };
