import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Logo from "./logo.js";
import SearchBar from "./searchBar.js";
import RecentPosts from "./recentPosts.js";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
}

  render() {
    return (
      <div className="home-wrapper">
        <Logo logoPage="home-logo" size={"105px"}/>
        <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
