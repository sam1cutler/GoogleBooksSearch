import React from 'react';
import ReactDOM from 'react-dom';
import BookTypeInput from './BookTypeInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookTypeInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
