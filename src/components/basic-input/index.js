import React from 'react';
import './index.scss';

export default class BasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onChange(e) {
    this.props.onChange && this.props.onChange(e);
  }

  onFocus(e) {
    this.props.onFocus && this.props.onFocus(e);
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.select();
    }
  }

  onBlur(e) {
    this.props.onBlur && this.props.onBlur(e);
  }

  onKeyDown(e) {
    this.props.onKeyDown && this.props.onKeyDown(e);
  }

  render() {
    return (
      <div className='basic-input'>
        <span className='pre'>{this.props.prefix}</span>
        <input
          ref={this.inputRef}
          className={this.props.extraInputClass}
          name={this.props.name}
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
          autoComplete='false'
        />
        <span className='suf'>{this.props.suffix}</span>
      </div>
    );
  }
}
