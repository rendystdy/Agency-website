import React from 'react';

const Field = props => {
  console.log('field', props);

  return (
    <div className='form-group'>
      {props.elementType === 'input' ?
        <input
          className='form-control'
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required='required'
          data-validation-required-message='Please enter your name.'
          name={props.name}
          //   value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      : 
        <textarea
          className='form-control'
          id={props.name}
          placeholder={props.placeholder}
          required='required'
          data-validation-required-message='Please enter a message.'
          //   value={props.value}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      }
      <p className='help-block text-danger'>
        {(props.touched && props.errors) && <span>{props.errors}</span>}
      </p>
    </div>
  );
};

export default Field;
