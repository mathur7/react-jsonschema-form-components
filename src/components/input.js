import Proptypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  return (
    <input 
      type="text"
      style={props.style}
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} 
    />
  );
};

Input.defaultProps = {
  value: '',
  defaultValue: '',
  required: false,
  onChange: () => {},
  style: {
    width: '414px',
    height: '47px',
    border: '1px solid #d8d8d8',
    borderRadius: '3px',
    fontSize: '11px',
    fontFamily: 'Helvetica',
    color: '#757575'
  }
};

Input.propTypes = {
  value: Proptypes.string,
  defaultValue: Proptypes.string,
  required: Proptypes.bool,
  onChange: Proptypes.func,
  style: Proptypes.object
};

export default Input;