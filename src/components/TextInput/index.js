import React from 'react'
import './styles.css'

export default ({name, label, value, ...rest}) => {
  return (
    <div className={'textInput'}>
      <label>{label}</label>
      <input
        type={'text'}
        autoComplete={'off'}
        name={name}
        value={value}
        {...rest}
      />
    </div>
  )
}
