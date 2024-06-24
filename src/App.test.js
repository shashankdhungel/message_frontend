// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from "./components/HelloWorld";


test('renders correctly', () => {
const component = renderer.create(<HelloWorld />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});

