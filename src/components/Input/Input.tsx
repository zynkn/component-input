import React from 'react';
import './Input.scss';
import { FaTimes, FaEye } from 'react-icons/fa';


const Input: React.FC<any> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState(props.value || '');
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    if (props.validation) {
      let res = props.validation.condition.test(props.value);
      setIsValid(res);
    }
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.validation) {
      let res = props.validation.condition.test(e.target.value);
      setIsValid(res);
    }
    if (e.target.value.length > 0) setIsVisible(true)
    else setIsVisible(false);
    setValue(e.target.value);
    if (props.onChange) props.onChange(e.target.value);

  }

  const handleClear = () => {
    if (props.validation) {
      let res = props.validation.condition.test('');
      setIsValid(res);
    }
    setIsVisible(false);
    setValue('');
    if (props.onChange) props.onChange('');

  }

  return (
    <label className={`Input ${props.direction} ${isValid ? '' : 'invalid'}`} style={props.style}>
      <span className="label-text">{props.label || 'Default Label'}</span>
      <div className="input-wrap">
        <span className="prefixed-icon">
          {props.prefix}
        </span>
        <input style={{ width: props.width, }} value={value} className={props.prefix ? 'prefix' : ''} type={props.type || "text"} onChange={handleChange} />
        {
          props.allowClear && isVisible &&
          <button className="toggle-btn" onClick={handleClear} >
            <FaTimes />
          </button>
        }
      </div>
      {
        props.validation && <span className="validation-text">
          {isValid ? props.validation.validText : props.validation.invalidText}
        </span>
      }


    </label>
  )
};

export default Input;