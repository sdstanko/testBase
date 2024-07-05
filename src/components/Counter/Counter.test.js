import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('counter-test', () => {
    test('test router', async () => {
        renderTestApp(null, { initialState: { counter: { value: 0 } } });

        const incrementBtn = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');

        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
});
