import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './post';

class ResultsPosts extends Component {
    constructor() {
        super();
    this.renderPosts=this.renderPosts.bind(this);
}

    renderPosts() {
      const posts = this.props.posts.map((post, index) => {
          return(
              <Post key={index} {...post} />
          )
      })
      return posts;
    }

    

    render() {
        return(
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="results-posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return{
        posts: state.posts.posts
    }
}
export default connect(mapStateToProps)(ResultsPosts);