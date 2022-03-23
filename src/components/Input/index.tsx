import React from 'react'

interface IInputBoxProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputBox({label,value,onChange} : IInputBoxProps) {
  return (
      <>
      <label>{label}</label>
    <input type="text" style={{background:"pink"}} value={value} onChange={onChange} />
    </>
  )
}
