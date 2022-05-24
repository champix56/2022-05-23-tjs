import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexWide from './FlexWide';

describe('<FlexWide />', () => {
  test('it should mount', () => {
    render(<FlexWide />);
    
    const flexWide = screen.getByTestId('FlexWide');

    expect(flexWide).toBeInTheDocument();
  });
});