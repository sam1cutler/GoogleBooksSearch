import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {

  /*-- instantiating state to hold API search results --*/
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  handleSuccessfulSearch = (newSearchResults) => {
    console.log('App state currently looks like:')
    console.log(this.state)
    
    console.log('Search results made it to App.js');
    //console.log(newSearchResults);
    this.setState({
      searchResults: newSearchResults
    });
    console.log('App state currently looks like:')
    console.log(this.state)
  }

  render() {

    /*-- determine what to put in results section  --*/
    let resultsSectionFill = '';
    if (this.state.searchResults.length === 0 ) {
      resultsSectionFill = ''
    } else {
      resultsSectionFill = (
        <ResultsList 
          currentSearchResults={this.state.searchResults}
        />
      )
    }

    return (
      <div className="App">
        <h1 className='App-header'>Google Book Search</h1>
        <main>
          <SearchForm 
            handleSuccessfulSearch={ (newSearchResults) => this.handleSuccessfulSearch(newSearchResults)}
          />
          {resultsSectionFill}
        </main>
      </div>
    );
  }
}

export default App;