import { render } from '@testing-library/react';
import Launches from './index';

test('should set state on mount', () => {
    const { getByText } = render(<Launches creatorDetails={{name: 'XYZ'}}/>);
    expect(getByText('XYZ')).toBeTruthy()
});
  