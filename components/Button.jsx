import React from 'react';

export default class ButtonComponent extends React.Component {
   
   getClasses() {
    const classes = [];
    if (this.props.color) {
      classes.push(`color-${this.props.color}`);
    }
    if (this.props.size) {
      classes.push(`size-${this.props.size}`);
    }
    return classes.join(' ');
   }

   render() {
      return (
        <div 
          tabIndex='0'
          className={`button ${this.getClasses()}`} id={this.props.id}
          onClick={this.props.onClick}>
          {this.props.children}
        </div>
      );
   }
}
