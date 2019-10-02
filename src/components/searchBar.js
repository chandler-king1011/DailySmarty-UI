import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {
  constructor() {
  super();

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}


  handleFormSubmit = function({query}) {
      console.log("Trying to handle submit for query", query)
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

export default SearchBar;



