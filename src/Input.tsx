import React from 'react';
import './Input.scss';
import { MdClear } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Input: React.FC<any> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [inputType, setInputType] = React.useState("password");

  const handleVisible = () => {
    setIsVisible(!isVisible);
    setInputType(inputType === "text" ? "password" : "text");
  }
  return (
    <label className="Input" htmlFor="password">
      <span className="label-text">ENTER PASSWORD</span>
      <div className="input-wrap">
        <input type={inputType} id="password" />
        <button className="toggle-btn" onClick={handleVisible}>
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="validator">
        <span className="bar active" />
        <span className="bar active" />
        <span className="bar" />
        <span className="validator-text">Could be stronger</span>
      </div>

    </label>
  )
}
export default Input;