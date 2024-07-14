/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DropIndicator = ({beforeId, card}) => {
    return (
        <div 
        data-before={beforeId || '-1'}
        data-column={card}
        className='my-0.5 h-0.5 w-full bg-violet-400 opacity-100'>
        </div>
    );
};

export default DropIndicator;