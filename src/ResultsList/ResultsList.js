import React, { Component } from 'react';
import ResultsItem from './ResultsItem';
import './ResultsList.css';

class ResultsList extends Component {
  render() {
    return (
      <div className='major-section'>
          <h2>Search Results</h2>
          <ResultsItem />
          <ResultsItem />
          <ResultsItem />
      </div>
    );
  }
}

export default ResultsList;