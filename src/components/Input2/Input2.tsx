import React from 'react';
import './Input2.scss';


const Input2 = ({
  width, direction, className, style, label, type, validationText
}: any) => {
  return (
    <label className={`Input ${className} ${direction}`}>
      <span className={`label-text`}>
        {label || 'default label'}
      </span>
      <div className={`input-wrap`}>
        <input type={type || 'text'} />
        <span className={`validation-text`}>
          {validationText || 'default validation'}
        </span>
      </div>

    </label>
  )
}

export default Input2;