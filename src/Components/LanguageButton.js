import React from 'react';
import './LanguageButton.css';

export default class LanguageButton extends React.Component {
  render() {
return (
     <button
          className= 'language-selector-button'
          aria-pressed={this.props.isSelected}
          onClick=
          {() => this.props.onClick(this.props.iso)}
          key={this.props.index}>
          {this.props.title}
        </button>
      )
    
  }
}