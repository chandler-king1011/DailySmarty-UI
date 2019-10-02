import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
  super();

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}


  handleFormSubmit = function({query}) {
      console.log("Trying to handle submit for query", query);
      this.props.history.push('/results');
  }

  renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input} />
  }



  render() {

    const { handleSubmit } = this.props;

    return(
        <form className="search-bar" onSubmit={this.handleFormSubmit}>
            <Field name="query" component={this.renderInput} />
        </form>
    )
  }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar=withRouter(SearchBar);

export default SearchBar;



