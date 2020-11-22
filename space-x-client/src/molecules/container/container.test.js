import { render, screen } from '@testing-library/react';
import Container from './index';

test('should render elements using prop data', () => {
    const launches = [
        {
            flight_number: 1,
            launch_success: true,
            land: true,
            links: {
                mission_patch_small: 'https://images2.imgbox.com/d0/22/gyTVYo21_o.png',
            },
            mission_id :[
                'EE86F74'
            ]
        }
    ]
    const { getByText } = render(<Container launches={launches}/>)
    expect(getByText('EE86F74')).toBeInTheDocument()
});
  