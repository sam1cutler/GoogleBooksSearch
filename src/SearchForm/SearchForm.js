import React, { Component } from 'react';
import './SearchForm.css';
import BookTypeInput from './BookTypeInput';
import PrintTypeInput from './PrintTypeInput';
import TextInput from './TextInput';

class SearchForm extends Component {
  render() {
    return (
      <div className='major-section'>
          <h2>Search Form! (header will be removed)</h2>
          <form>
            <div className='search-form-sub-div'>
                <TextInput /><button type='submit'>Search</button>
            </div>
            <div className='search-form-sub-div'>
                <PrintTypeInput />
                <BookTypeInput />
            </div>
          </form>
      </div>
    );
  }
}

export default SearchForm;