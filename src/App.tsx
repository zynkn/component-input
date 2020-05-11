import React from 'react';

import './App.css';
import Input from './Input';


const App: React.FC = () => {
  const [value, setValue] = React.useState('');
  const validation = /^[a-z0-9_-]{6,16}$/;
  const inputEl = React.useRef<HTMLInputElement>(null);

  console.log(value);
  React.useEffect(()=>{
    if(inputEl.current){
      inputEl.current.focus();
    }
  },[]);
  return (
    <div className="App">
      <Input type="number" block value={value} onChange={(e)=>setValue(e.target.value)} onPressEnter={()=>{console.log('ggg')}} />
      <Input ref={inputEl} placeholder="12c1" type="tel"block value={value} onChange={(e)=>setValue(e.target.value)} onPressEnter={()=>{console.log('ggg')}} />
      <Input block disabled placeholder="placeholder" prefix="prefff" suffix="suff"/>
      <Input disabled placeholder="placeholder" suffix={<button>button</button>}/>
    </div>
  );
}

export default App;
