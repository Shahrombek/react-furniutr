import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button() {
    return <div>
        <button className='btnn'> <FontAwesomeIcon icon={faPlus} /> </button>
    </div>;
}

export default Button;
