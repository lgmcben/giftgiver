import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
}); 

it('initialize the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id:1 }]);
});

it('adds a new gift to the list when clicking `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});

