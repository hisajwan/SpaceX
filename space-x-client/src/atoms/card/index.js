import React from 'react';
import './card.scss';

const blockName = 'card';

function Card({children, customClass}) {
    return (
        <div className={`${blockName} ${customClass}`}>
            {children}
        </div>
    )
}

export default Card;