import React, { Component } from 'react';

import logo from '../../static/assets/images/ds_circle_logo.png';

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoSize: {
        height: this.props.size,
        width: this.props.size
      }
    }
  }

  render() {
    return (
    <div className="logo-wrapper-main">
        <img style={this.state.logoSize} alt="logo" src={logo} />
    </div>
    )
  }
}