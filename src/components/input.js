import Proptypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  return (
    <input type="text"
      className="bli-input"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};

Input.defaultProps = {
  value: '',
  defaultValue: 'something',
  required: false,
  onChange: () => {}
};

Input.propTypes = {
  value: Proptypes.string,
  defaultValue: Proptypes.string,
  required: Proptypes.bool,
  onChange: Proptypes.func
};

export default Input;