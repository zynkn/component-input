import React from 'react';

import './App.css';
import Input from './Input';
import Input2, { Password } from './components/Input';

import { FaUser, FaAsterisk, FaEnvelope } from 'react-icons/fa';

const App: React.FC = () => {
  const [value, setValue] = React.useState('');
  const validation = /^[a-z0-9_-]{6,16}$/;

  console.log(value);
  return (
    <div className="App">
      <Input />
      <div style={{ marginTop: '16px' }}>
        <Input2
          type="password"
          direction="row"
          width={220}
          validation={
            {
              condition: validation,
              invalidText: '* Check your input again.',
              validText: 'Validation test passed.',
            }
          }
          allowClear />
      </div>
      <div style={{ marginTop: '16px' }}>
        <Password />
      </div>
      <div style={{ marginTop: '16px' }}>
        <Input2
          label="Username"
          value={value}
          onChange={setValue}
          width={320}
          direction="column"
          prefix={<FaUser style={{ width: 12, color: 'gray' }} />}
          validation={
            {
              condition: validation,
              invalidText: '* Check your input again.',
              validText: 'Selfmade Orange SelfMade Orange.',
            }
          }
          allowClear
        />
      </div>
    </div>
  );
}

export default App;
