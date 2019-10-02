import React, { Component } from 'react';


export default class RecentPosts extends Component {
  constructor() {
  super();
}
  render() {
    return(
        <div className="recent-posts-wrapper">
            <div className="recent-posts-heading">Recent Posts:</div>
            <ul className="recent-posts">
                <li className="recent-post">Post</li>
                <li className="recent-post">Post</li>
                <li className="recent-post">Post</li>
            </ul>
        </div>
    )
}
}