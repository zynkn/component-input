import React from 'react';

import './App.css';
import Input2 from 'components/Input2';

import { FaUser, FaAsterisk, FaEnvelope } from 'react-icons/fa';

const App: React.FC = () => {
  const [value, setValue] = React.useState('');
  const validation = /^[a-z0-9_-]{6,16}$/;

  console.log(value);
  return (
    <div className="App">
      <Input2 label="이름" />
      <br /><br />
      <Input2 label="이메일" direction="row" />      
      <br /><br />
      <Input2 label="level" direction="row"  disabled/>

    
    </div>
  );
}

export default App;
