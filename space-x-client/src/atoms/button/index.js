import React from 'react';
import './button.scss';

const blockName = 'button';

function Button({customClass, content, onButtonClick, filterName}) {
    const {selected, value} = content;
    const handleClick = (e, content) => {
        e.preventDefault();
        onButtonClick(content, filterName)
    }
    return (
        <a role='button' className={`${blockName} ${selected ? `${blockName}__selected` : ''} ${customClass}`} onClick={e => handleClick(e, content)} href={`#`}>{value}</a>
    )
}

export default Button;