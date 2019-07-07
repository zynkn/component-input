import React from 'react';
import './Input.scss';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const REGEX_WEAK = /^[A-Za-z0-9]{1,24}$/;
const REGEX_FAIR = /^[A-Za-z0-9]{4,24}$/;
const REGEX_STRONG = /^[A-Za-z0-9]{8,24}$/;
const TEXT: { [key: string]: string } = {
  weak: "Too weak",
  fair: "Colud be stronger",
  strong: "Strong password",
}
const Input: React.FC = () => {
  const [inputType, setInputType] = React.useState("password");
  const [value, setValue] = React.useState("");
  const [validation, setValidation]: any = React.useState("");

  const handleInputType = () => {
    setInputType(inputType === "text" ? "password" : "text");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (REGEX_STRONG.test(e.target.value)) { setValidation("strong") }
    else if (REGEX_FAIR.test(e.target.value)) { setValidation("fair") }
    else if (REGEX_WEAK.test(e.target.value)) { setValidation("weak") }
    else { setValidation('') }

    setValue(e.target.value);
  }

  return (
    <label className="Input" htmlFor="password">
      <span className="label-text">ENTER PASSWORD</span>
      <div className="input-wrap">
        <input onChange={handleChange} value={value} type={inputType} id="password" maxLength={24} />
        <button className="toggle-btn" onClick={handleInputType}>
          {inputType === "text" ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className={`validator ${validation}`}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="validator-text">{TEXT[validation]}</span>
      </div>
    </label>
  )
}
export default Input;