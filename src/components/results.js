import React, { Component } from 'react';

import Logo from './logo.js';
import SearchBar from './searchBar';

class Results extends Component {
    render() {
        return (
            <div>
                <Logo size={"55px"} />
                <SearchBar />
            </div>
        )
    }
    
}

export default Results;