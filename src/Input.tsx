import React from 'react';
import './Input.scss';
import { MdClear } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Input: React.FC<any> = (props) => {

  return (
    <label className="Input">
      <input type="text" />
      <span className="label">Label</span>
      {/* <button className="delete-btn"><MdClear /></button> */}
      <button className="delete-btn"><FaEyeSlash /></button>
      <div className="validator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  )
}
export default Input;