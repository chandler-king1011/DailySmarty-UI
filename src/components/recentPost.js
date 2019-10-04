import React, { Component } from 'react';


export default class RecentPost extends Component {
  constructor(props) {
  super(props);

  this.state = {
      title: this.props.title,
      topics: this.props.associated_topics
  }
}

renderTopics() {
  let topics = this.state.topics.map((topic, index) => {
    return <span key={index}>{topic}</span>
  })
  return topics;
}



  render() {
    return(
        <li className="recent-post">
            <div className="recent-post-title">{this.state.title}</div>
            <div className="recent-post-topics">{this.renderTopics()}</div>
        </li>
    )
}
}