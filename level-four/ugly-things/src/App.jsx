import { useState } from 'react';
import { UglyContextProvider } from './uglyThingContext';
import Form from './components/Form';
import List from './components/List';

import './App.css';

function App() {
  return (
    <div className='App'>
      <UglyContextProvider>
        <Form />
        <List />
      </UglyContextProvider>
    </div>
  );
}

export default App;
