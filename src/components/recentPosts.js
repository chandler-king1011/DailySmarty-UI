import React, { Component } from 'react';
import axios from 'axios';
import RecentPost from './recentPost';


export default class RecentPosts extends Component {
  constructor() {
  super();

  this.state = {
    recentPosts: []
  }

  this.getRecentPosts = this.getRecentPosts.bind(this);
  this.recentPosts = this.recentPosts.bind(this);
}

getRecentPosts() {
  axios.get("https://api.dailysmarty.com/posts").then(response => {
    this.setState({
      recentPosts: response.data.posts.splice(0, 3)
    });
  }
  ).catch(error => {
    console.log("Get recent posts error", error);
  });
}

recentPosts() {
  return this.state.recentPosts.map(post => {
    return <RecentPost key={post.id} {...post}/>;
  })
}

componentDidMount() {
  this.getRecentPosts();
}


  render() {
    return(
        <div className="recent-posts-wrapper">
            <div className="recent-posts-heading">Recent Posts:</div>
            <ul className="recent-posts">
                {this.recentPosts()}
            </ul>
        </div>
    )
}
}