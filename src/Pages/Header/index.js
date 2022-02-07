import './Header.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom';

function Header() {
    return <header>
        <div className='header'>
            <h3>Furniutr.</h3>
            <button> <FontAwesomeIcon icon={faSearch} /> </button>
        </div>

        <p>Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</p>
    </header>;
}

export default Header;
