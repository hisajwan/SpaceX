import React from 'react';
import './button.scss';

const blockName = 'button';

function Button({content, filterData, filterName}) {
    const {selected, value} = content;
    const handleClick = (e, content) => {
        e.preventDefault();
        filterData(content, filterName)
    }
    return (
        <a role='button' className={`${blockName} ${selected ? `${blockName}__selected` : ''}`} onClick={e => handleClick(e, content)} href={`#`}>{value}</a>
    )
}

export default Button;