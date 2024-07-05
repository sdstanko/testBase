import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { renderTestApp } from './tests/helpers/renderTestApp';

describe('test app', () => {
    test('error page test', () => {
        renderTestApp(null, { route: '/asdasd' });
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});
