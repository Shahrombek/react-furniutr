import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../Assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src={logo} />
        <button className="search">
        <FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className='firstText'>
       Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
      </div>
    </header>
  );
};

export default Header;
