import React from 'react';


export default class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div>
          <button className="btn btn-outline-success" onClick={this.props.onClick}>{this.props.text}</button>
        </div>
      );
    }
  }