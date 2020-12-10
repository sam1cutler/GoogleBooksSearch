import React, { Component } from 'react';
import './ResultsItem.css';

class ResultsItem extends Component {
  
    static defaultProps = {
        currentBook: {volumeInfo: {title: ''}}
    }
  
    render() {
        return (
            <div className='results-item'>
                <h3>{this.props.currentBook.volumeInfo.title}</h3>
            </div>
        );
    }
}

export default ResultsItem;