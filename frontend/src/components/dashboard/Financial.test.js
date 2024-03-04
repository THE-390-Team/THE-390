import React from 'react';
import { render } from '@testing-library/react';
import Financial from './Financial';
import '@testing-library/jest-dom'

describe('Financial component', () => {
  test('renders financial details with correct information', () => {
    const { getByText } = render(<Financial />);
    expect(getByText('Financial Details')).toBeInTheDocument();
    expect(getByText('Financial info 1')).toBeInTheDocument();
    expect(getByText('Financial info 2')).toBeInTheDocument();
    expect(getByText('Financial info 3')).toBeInTheDocument();
  });
});
