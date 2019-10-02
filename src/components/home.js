import React, { Component } from 'react';

import Logo from "./logo.js";
import SearchBar from "./searchBar.js";
import RecentPosts from "./recentPosts.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
