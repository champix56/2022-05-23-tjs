import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditorWrapper from './EditorWrapper';

describe('<EditorWrapper />', () => {
  test('it should mount', () => {
    render(<EditorWrapper />);
    
    const editorWrapper = screen.getByTestId('EditorWrapper');

    expect(editorWrapper).toBeInTheDocument();
  });
});