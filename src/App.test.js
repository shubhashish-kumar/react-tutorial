import React from 'react';
import ReactDOM from 'react-dom';
import App from './example5/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
