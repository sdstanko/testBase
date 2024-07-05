import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Users from './Users';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import UserDetailsPage from '../pages/UserDetailsPage';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store.js';
import { renderTestApp } from '../tests/helpers/renderTestApp';

jest.mock('axios');

describe('USERS APP', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                },
            ],
        };
    });

    afterEach(() => jest.clearAllMocks());

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        renderTestApp(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('test redirect', async () => {
        axios.get.mockReturnValue(response);
        renderTestApp(null, { route: '/users' });
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});
