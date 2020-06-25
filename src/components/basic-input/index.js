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
    const { prefix, suffix, inputClass, name, value } = this.props;
    return (
      <div className='basic-input'>
        {prefix && <span className='pre'>{prefix}</span>}
        <input
          ref={this.inputRef}
          className={inputClass}
          name={name}
          value={value}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
          autoComplete='off'
        />
        {suffix && <span className='suf'>{suffix}</span>}
      </div>
    );
  }
}
