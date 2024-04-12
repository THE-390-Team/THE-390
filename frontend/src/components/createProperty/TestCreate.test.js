import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CreateLocker from './CreateLocker'
import CreateParking from './CreateParking'
import CreateProperty from './CreateProperty'
import CreateUnit from './CreateUnit'
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom'
// the components that are being mocked
import { useProperty } from "../../utils/hooks/PropertyContext"
import { useProfile } from '../../utils/hooks/ProfileContext';

// 1) Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual react-router-dom module
    useNavigate: jest.fn(), // Provide a Jest mock function for useNavigate
}));

// Mock the implementation of useNavigate
useNavigate.mockImplementation(() => jest.fn());

// 2) Mock the useProfile/useProperty hook, to by dynamically decided by the test case
jest.mock('../../utils/hooks/PropertyContext');
jest.mock('../../utils/hooks/ProfileContext');

describe('Create Locker', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        jest.resetAllMocks();
        useProfile.mockImplementation(() => ({
            role: 'COMPANY',
            fetchProfileRole: jest.fn().mockImplementation(() => {
                return 'COMPANY';
            })
        }));
        useProperty.mockImplementation(() => ({
            properties: {
                "id": 1,
                "name": null,
                "company": 2,
                "fee_rate": "1.00",
                "num_condo_units": 4,
                "num_parking_units": 1,
                "num_storage_units": 2,
                "address": "5905 1e avenue",
                "city": "Montreal",
                "province": "Quebec",
                "postal_code": "H4C0R5",
            }
        }));
    });
    // the app renders without crashing
    it('renders without crashing', () => {
        render(<CreateLocker />);
    });

    // it renders at least 1 text box
    it('renders the title of the property text field as "Property Name', async () => {
        render(<CreateLocker />);
        await waitFor(() => screen.getByText('Property Name'));
        expect(screen.getByText('Property Name')).toBeInTheDocument();
    });

});

