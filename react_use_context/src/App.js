import React, { useState } from 'react';
import Page from './components/Page';
import Test from './components/Test'

import './index.css'

import { ThemeContext } from './context/ThemeContext';

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ isDark , setIsDark}}>
        <Page isDark={isDark} setIsDark={setIsDark} />
      </ThemeContext.Provider>
      <Test/>
    </div>
  );
}

export default App;
