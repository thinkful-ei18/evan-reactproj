import React from 'react';
import './InputField.css';

export default class InputField extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
    render() {
      return (
        <textarea onChange={(e) => this.props.onChange(e)} value={this.props.outputText} className='input-text'/>
      )
    }

}