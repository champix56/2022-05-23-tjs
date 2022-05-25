import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThumbnailPDF from './ThumbnailPDF';

describe('<ThumbnailPDF />', () => {
  test('it should mount', () => {
    render(<ThumbnailPDF />);
    
    const thumbnailPdf = screen.getByTestId('ThumbnailPDF');

    expect(thumbnailPdf).toBeInTheDocument();
  });
});