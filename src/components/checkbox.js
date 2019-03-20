import Proptypes from 'prop-types';
import React from 'react';

const Checkbox = (props) => {
  return (
    <button 
      className={props.value ? "checked" : "unchecked"} 
      onClick={() => props.onChange(!props.value)}>
        {props.value}
    </button>
  );
};

Checkbox.defaultProps = {
  value: 'checked',
  onChange: () => {}
};

Checkbox.propTypes = {
  value: Proptypes.string,
  onChange: Proptypes.func
};

export default Checkbox;
