import React from 'react';
import './Section.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import form from '../../Components/Data';

function Section() {

    const delet = (index) => {
        form.remove(form[index])
    }


    return <section>
        <h1>Mahsulotlar</h1>
        <NavLink to='/add'>
            <Button />
        </NavLink>
        <div className="row mt-4 ps-3">
            {
                form.map((item, index) => {
                    return <div key={index} className="col-sm-6 col-md-4 col-lg-3 py-3">
                        <div className='card'>
                            <img src={item.url} alt="img" />
                            <p>{item.name}</p>
                            <span> {item.cost} </span>
                            <div className='hoverdiv'>
                                <NavLink to={'/edit'}>
                                    <button className='red'>
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                </NavLink>
                                <button onClick={delet}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <span className='span'></span>
        <footer>
            <img src="./image/algorismic.png" alt="" />
        </footer>
    </section>;
}

export default Section;
