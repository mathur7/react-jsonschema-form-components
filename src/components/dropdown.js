import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: props.parseDisplayName(props.value) || '---',
      toggleMenu: false,
      value: props.value
    };

    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // todo: add handling for value if this.props !== nextProps && nextProps === this.state
  // or other logic to denote optimistic update
  componentWillReceiveProps(nextProps) {
    const {parseDisplayName} = this.props;
    const displayName = parseDisplayName(this.props.value);
    const nextDisplayName = parseDisplayName(nextProps.value);

    if ((displayName !== nextDisplayName) && (nextDisplayName !== this.state.displayName)) {
      this.setState({
        displayName: nextDisplayName,
        value: nextProps.value
      });
    }
  }

  getValue() {
    return this.state.value;
  }

  handleCloseMenu() {
    this.setState({
      toggleMenu: false
    });
  }

  handleToggle() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  handleSelect(option) {
    return e => {
      this.setState({
        displayName: option.label,
        value: option.value || option
      });

      this.props.onSelect(option);
      this.handleCloseMenu();
    };
  }

  renderOptions() {
    const {options: { enumOptions }} = this.props;
    console.log(this.props, enumOptions);
    const hide = !this.state.toggleMenu ? ' hide' : '';
    const classes = `dropdown-menu-items${hide}`;

    // TODO: Support passing options as children of this component.
    const dropdownItems = enumOptions.map((option, index) => {
      return (
        <li key={index} onMouseDown={this.handleSelect(option.value)}>{option.label}</li>
      );
    });

    return (
      <ul className={classes}>
        {dropdownItems}
      </ul>
    );
  }

  render() {
    return (
      <div className={`dropdown-menu ${this.props.className}`}>
        <button
          className="dropdown-menu-selected"
          onBlur={this.handleCloseMenu}
          onClick={this.handleToggle}>
          {this.state.displayName}
        </button>
        {this.renderOptions()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  /** Default is noop. */
  onSelect: PropTypes.func.isRequired,
  /** Array of text or objects to populate dropdown. */
  options: PropTypes.array.isRequired,
  /** The currently selected option. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
};

Dropdown.defaultProps = {
  onSelect: () => {},
  parseDisplayName: name => name
};

export default Dropdown;
