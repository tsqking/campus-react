import React from 'react';
import BasicInput from '../basic-input';
const DROP_DOWN_POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right'
};

const DropDown = ({ target }) => {
  let { open, options, getPlate, activeIndex } = target.props;
  if (open && options && options.length > 0) {
    return (
      <ul>
        {options.map((option, key) => {
          return (
            <Plate
              key={key}
              option={option}
              getPlate={getPlate}
              activeIndex={activeIndex}
            />
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

class Plate extends React.Component {
  constructor(props) {
    super(props);
    this.liRef = React.createRef();
  }

  componentDidMount() {
    if (this.liRef && this.liRef.current) {
      this.liRef.current.scrollIntoViewIfNeeded();
    }
  }

  render() {
    let { key, option, getPlate, activeIndex } = this.props;
    let activeClassName = activeIndex === key ? 'active' : '';
    return (
      <li key={key} className={activeClassName}>
        {getPlate && getPlate(option)}
      </li>
    );
  }
}

export default class BasicSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  onChange(e) {
    this.props.onChange && this.props.onChange(e);
  }

  onFocus(e) {
    this.props.onFocus && this.props.onFocus(e);
  }

  onBlur(e) {
    this.props.onBlur && this.props.onBlur(e);
  }

  onKeyDown(e) {}

  render() {
    return (
      <div className='basic-select'>
        <BasicInput
          extraInputClass={this.props.extraInputClass}
          name={this.props.name}
          value={this.props.inputValue}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
        />
        <DropDown target={this} />
      </div>
    );
  }
}
