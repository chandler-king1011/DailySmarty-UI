import React, { Component } from 'react';

class Post extends Component {

    renderPostTopics() {
        let topics = this.props.associated_topics.map((topic ,index) => {
            return (
                <span className="post-topic" key={index}>{topic}</span>
            ) 
        })
        return topics
    }

    render() {
        return (
            <li>
                <div className="post-title">
                    {this.props.title}
                </div>
                <div className="post-topics">
                    {this.renderPostTopics()}
                </div>
            </li>
        )
    }
}

export default Post;