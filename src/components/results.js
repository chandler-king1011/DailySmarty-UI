import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../actions';
import Logo from './logo.js';
import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return (
            <div className="results">
                <Logo logoPage="results-logo" size={"55px"} />
                <SearchBar page="results" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPosts />
            </div>
        )
    }
    
}

export default connect(null, actions)(Results);