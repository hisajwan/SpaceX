import { render, fireEvent } from '@testing-library/react';
import Button from './index';

test('should call function provided in filter data', () => {
    const mockFunc = jest.fn();
    const { getByRole } = render(<Button content={[
        {
            id: 1,
            value: 2006,
            selected: false,
        },
        {
            id: 2,
            value: 2007,
            selected: false,
        }]} 
    filterData={mockFunc}
    filterName={'launch'}/>)
    fireEvent.click(getByRole('button'));
    expect(mockFunc).toHaveBeenCalled();
});
  