import React, { Component } from 'react';
import axios from 'axios';


export default class RecentPosts extends Component {
  constructor() {
  super();

  this.getRecentPosts = this.getRecentPosts.bind(this);
}

getRecentPosts() {
  axios.get("https://api.dailysmarty.com/posts").then(response => {
    console.log("get recent posts response", response);
  }
  ).catch(error => {
    console.log("Get recent posts error", error);
  });
}

componentDidMount() {
  this.getRecentPosts();
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