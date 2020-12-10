import React from 'react';
import ReactDOM from 'react-dom';
import PrintTypeInput from './PrintTypeInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrintTypeInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
