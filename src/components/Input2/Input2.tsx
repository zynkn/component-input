import React from 'react';
import './Input2.scss';
import { FaTimesCircle, FaAsterisk, FaEnvelope } from 'react-icons/fa';


const Input2 = ({
  width, direction, className,disabled, style, label, type, validationText, allowClear
}: any) => {
  return (
    <label className={`Input ${className} ${direction}`}>
      {
        label && 
        <span className={`label-text`}>
          {label}
        </span>
      }
      
      <div className={`input-wrap ${disabled&&'disabled'}`}>
        <span className="prefix-icon">
          <FaEnvelope />
        </span>
        <input type={type || 'text'} placeholder="admin@gmail.com" disabled={disabled}/>
        {
          allowClear && 
          <button className="clear-btn">
            <FaTimesCircle />
          </button>
        }

        
      </div>
      <span className={`validation-text`} style={direction&&label&&{marginLeft: `${label.length + 1}em`}}>
          {validationText || 'default validation 12312312312312 32131231 2321'}
        </span>
    </label>
  )
}

export default Input2;