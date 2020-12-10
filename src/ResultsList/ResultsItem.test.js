import React from 'react';
import ReactDOM from 'react-dom';
import ResultsItem from './ResultsItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultsItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
