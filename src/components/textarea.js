import Proptypes from 'prop-types';
import React from 'react';

const Textarea = (props) => {
  return (
    <textarea type="text"
      className="bli-textarea"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};

Textarea.defaultProps = {
  value: '',
  defaultValue: 'something',
  required: false,
  onChange: () => {}
};

Textarea.propTypes = {
  value: Proptypes.string,
  defaultValue: Proptypes.string,
  required: Proptypes.bool,
  onChange: Proptypes.func
};

export default Textarea;