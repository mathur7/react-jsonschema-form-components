const Input = (props) => {
  return (
    <input type="text"
      className="bli-input"
      value={props.value}
      defaultValue={props.defaultValue}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};

export default Input;