import React from 'react';

const InputItem = props => (
  <div className='form-group'>
    <input
      className='form-control'
      id={props.id}
      type='email'
      placeholder={props.placeholder}
      required='required'
      data-validation-required-message='Please enter your email address.'
    />
    <p className='help-block text-danger'></p>
  </div>
);

export default InputItem;
