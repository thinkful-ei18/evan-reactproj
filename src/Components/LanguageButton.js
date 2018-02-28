import React from 'react';
import './LanguageButton.css';

export default class LanguageButton extends React.Component {
    render() {
    if (this.props.isSelected) {
      return (
      <button className='language-selector-button selected' onClick = {() => this.props.onClick(this.props.iso)} key={this.props.index}>
      {this.props.title}
    </button>)
    } else {
      return (
    <button className='language-selector-button' onClick = {() => this.props.onClick(this.props.iso)} key={this.props.index}>
      {this.props.title}
    </button>
    )  
}
    }
  }

