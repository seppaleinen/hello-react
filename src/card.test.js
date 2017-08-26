import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card src="/images/dog-1.jpg" />, div);
});
