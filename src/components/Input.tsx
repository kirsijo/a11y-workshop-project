import React from "react"

interface InputProps {
  label: string
  value: string
  handleOnChange: (event: { target: { value: string } }) => void
}

const Input = ({ label, value, handleOnChange }: InputProps) => {
  return (
    <>
      <div>
        <label htmlFor="postal-code">{label}</label>
      </div>
      <div>
        <input id="postal-code" value={value} onChange={handleOnChange} />
      </div>
    </>
  )
}

export default Input
