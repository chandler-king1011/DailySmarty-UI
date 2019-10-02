import React, { Component } from 'react';


export default class RecentPost extends Component {
  constructor(props) {
  super(props);

  this.state = {
      title: this.props.title,
      topics: this.props.topics
  }
}



  render() {
    const topic = this.state.topics[0];
    return(
        <li>
            <div className="recent-post-title">{this.state.title}</div>
            <div className="recent-post-topics">{topic}</div>
        </li>
    )
}
}