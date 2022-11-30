import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('12');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        userEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        userEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('8');
    });
});
