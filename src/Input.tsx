import React from 'react';
import './Input.scss';

interface InputProps {
  id?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  prefix?: string | number | React.ReactNode;
  suffix?: string | number | React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  type?: "text" | "number" | "email" | "password" | "tel";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, type = 'text', className, placeholder, disabled, block, prefix, suffix, value, onChange, onPressEnter }, ref) => {
  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>){
    if(onPressEnter && e.key === 'Enter'){
      onPressEnter();
    }
  }
  return (
    <label  className={`Input ${className} ${block ? '--block' : ''}`} htmlFor={id}>
      {typeof prefix === 'string' ? <span>{prefix}</span> : prefix}
      <input ref={ref} id={id} onKeyPress={handlePressEnter} onChange={onChange} placeholder={placeholder} disabled={disabled} type={type} value={value}/>
      {typeof suffix === 'string' ? <span>{suffix}</span> : suffix}
    </label>
  )
});
export default Input;