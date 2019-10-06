import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li>
                <div className="post-title">
                    {this.props.title}
                </div>
                <div className="post-topics">
                    {this.props.associated_topics}
                </div>
            </li>
        )
    }
}

export default Post;