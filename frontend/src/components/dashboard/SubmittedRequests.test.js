import React from 'react';
import { render } from '@testing-library/react';
import SubmittedRequests from './SubmittedRequests';
import '@testing-library/jest-dom'
describe('SubmittedRequests component', () => {
  test('renders submitted requests with correct information', () => {
    const { getByText } = render(<SubmittedRequests />);
    expect(getByText('Requests')).toBeInTheDocument();
  });
});
