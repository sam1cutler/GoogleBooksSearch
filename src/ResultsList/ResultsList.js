import React, { Component } from 'react';
import ResultsItem from './ResultsItem';
import './ResultsList.css';

class ResultsList extends Component {
    
    static defaultProps = {
        currentSearchResults: []
    }
  
    render() {

        const listOfResultItems = this.props.currentSearchResults.map( (book, index) => {
            console.log(book)
            console.log(index)
            return (
                <ResultsItem
                    currentBook={book}
                    key={index}
                />
            )
        })
    
        return (
        <div className='major-section'>
            <h2>Search Results</h2>
            {listOfResultItems}
        </div>
        );
    }
}

export default ResultsList;