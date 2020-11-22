import { render } from '@testing-library/react';
import Sidebar from './index';

test('should set state on mount only', () => {
    const { state } = render(<Sidebar/>);
    expect(state).not.toBeTruthy()
});
  