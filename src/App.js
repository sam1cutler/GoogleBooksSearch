import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App-header'>Google Book Search</h1>
        <main>
          <SearchForm />
          <ResultsList />
        </main>
      </div>
    );
  }
}

export default App;