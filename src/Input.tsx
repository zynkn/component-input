import React from 'react';
import './Input.scss';
import { MdClear } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const REGEX_WEAK = /^[A-Za-z0-9]{4,24}$/;
const REGEX_FAIR = /^[A-Za-z0-9]{8,24}$/;
const REGEX_STRONG = /^[A-Za-z0-9]{12,24}$/;
const MSG = ['Too weak', 'Could be stronger', 'Strong password'];
const Input: React.FC<any> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [inputType, setInputType] = React.useState("password");
  const [value, setValue] = React.useState('');
  const [message, setMessage] = React.useState('Too weak');

  const handleVisible = () => {
    setIsVisible(!isVisible);
    setInputType(inputType === "text" ? "password" : "text");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    console.log(REGEX_WEAK.test(e.target.value));
    console.log(REGEX_FAIR.test(e.target.value));
    if (REGEX_STRONG.test(e.target.value)) { setMessage(MSG[2]) }
    else if (REGEX_FAIR.test(e.target.value)) { setMessage(MSG[1]) }
    else { setMessage(MSG[0]) }

    setValue(e.target.value);
  }
  const handleValidate = () => {

  }
  return (
    <label className="Input" htmlFor="password">
      <span className="label-text">ENTER PASSWORD</span>
      <div className="input-wrap">
        <input onChange={handleChange} value={value} type={inputType} id="password" maxLength={24} />
        <button className="toggle-btn" onClick={handleVisible}>
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="validator">
        <span className={`bar ${REGEX_WEAK.test(value) && 'active'}`} />
        <span className={`bar ${REGEX_FAIR.test(value) && 'active'}`} />
        <span className={`bar ${REGEX_STRONG.test(value) && 'active'}`} />
        <span className="validator-text">{message}</span>
      </div>

    </label>
  )
}
export default Input;