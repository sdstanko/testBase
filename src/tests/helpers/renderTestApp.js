import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';
import { createReduxStore } from '../../store/store';

export const renderTestApp = (component, { route = '/', initialState = {} } = {}) => {
    const store = createReduxStore(initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>,
    );
};
