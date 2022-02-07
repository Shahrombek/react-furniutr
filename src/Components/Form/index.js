import './Form.css'
import form from "../Data";
import { Link, NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const CreateForm = () => {

    const { register, handleSubmit, reset } = useForm();

    const [forma, setForma] = useState([]);



    const onSubmit = (data) => {
        console.log(data);
        setForma(forma + data)
        form.push(data)
        reset();
    };
    const arr = [...forma];

    arr.map((itm) => {
        console.log(arr.itm);
    })

    console.log(arr);


    const back = () => {

    }
    const save = () => {
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input placeholder='Mahsulot rasmi' {...register("url", { required: true })} />
                    <input placeholder='Mahsulot nomi' {...register("name", { required: true })} />
                    <input placeholder='Mahsulot narxi' {...register("cost", { required: true })} />
                </div>

                <input type="submit" />

            </form>

            <div className='button'>
                <NavLink to={'/'}>
                    <button onClick={back()}>Ortga qaytish</button>
                    <button onClick={save()}>Saqlash</button>
                </NavLink>
            </div>



        </div>
    );
};

export default CreateForm;