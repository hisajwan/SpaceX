import { render, screen } from '@testing-library/react';
import Card from './index';

test('should render children', () => {
    const children = <button role='button'>Card Children</button>;
    render(<Card children={children}/>)
    expect(screen.getByRole('button')).toBeInTheDocument();
});
  