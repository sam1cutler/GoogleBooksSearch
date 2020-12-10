import React, { Component } from 'react';
import './SearchForm.css';
//import BookTypeInput from './BookTypeInput';
//import PrintTypeInput from './PrintTypeInput';
//import TextInput from './TextInput';

class SearchForm extends Component {
    
    /*-- instantiating state to hold form submission info --*/
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: '',
          printType: 'all',
          bookType: 'no-filter',
        };
    }

    /*-- establishing setState handlers when form is changed --*/
    searchTermChanged(searchTerm) {
        this.setState({
          searchTerm
        });
    }

    printTypeChanged(printType) {
        this.setState({
          printType
        });
    }

    bookTypeChanged(bookType) {
        this.setState({
          bookType
        });
    }

    /*-- handle form submission --*/
    handleSubmit(e) {
        e.preventDefault()
        console.log('Form was submitted.')

        const finalSearchTerm = `q=${this.state.searchTerm}`
        const finalPrintType = `&printType=${this.state.printType}`
        let finalFilterType= ``;
        if (this.state.bookType !== 'no-filter') {
            finalFilterType = `&filter=${this.state.bookType}`
        }

        const queryUrl = `https://www.googleapis.com/books/v1/volumes?${finalSearchTerm}${finalPrintType}${finalFilterType}`;
        console.log('Query url is '+queryUrl)
        
        //const tempUrl = 'https://www.googleapis.com/books/v1/volumes?q=henry';

        fetch(queryUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error ('Something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                // need to pass data up to App.js and change state there
                this.props.handleSuccessfulSearch(data.items);
            })
            .catch(error => {
                // want to improve to put error in the DOM, for now console log
                console.log(error.message)
            })
    }

  
    /*-- rendering  --*/
    render() {

        console.log('Search form state currently looks like:');
        console.log(this.state)

        return (
        <div className='major-section'>
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className='search-form-sub-div'>
                    <div className='search-form-element'>
                        <label htmlFor='searchTerm'>Search</label>
                        <input
                            type='text'
                            name='searchTerm'
                            id='searchTerm'
                            placeholder='Borges'
                            required
                            value={this.state.searchTerm}
                            onChange={e => this.searchTermChanged(e.target.value)}
                        />
                    </div>
                    <div className='search-form-element'>
                        <button type='submit'>Search</button>
                    </div>
                </div>
                <div className='search-form-sub-div'>
                    <div className='search-form-sub-div'>
                        <label htmlFor='printType'>Print Type:</label>
                        <select 
                            name='printType'
                            onChange={e => this.printTypeChanged(e.target.value)}> 
                                <option value='all'>All</option>
                                <option value='books'>Books</option>
                                <option value='magazines'>Magazines</option>
                        </select>
                    </div>
                    <div className='search-form-sub-div'>
                        <label htmlFor='bookType'>Book Type:</label>
                        <select 
                            name='bookType'
                            onChange={e => this.bookTypeChanged(e.target.value)}> 
                                <option value='no-filter'>No Filter</option>
                                <option value='partial'>At least partially viewable</option>
                                <option value='full'>Full text viewable</option>
                                <option value='free-ebooks'>Google eBooks (free)</option>
                                <option value='paid-ebooks'>Google eBooks (payment required)</option>
                                <option value='ebooks'>Google eBooks (paid or free)</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchForm;