import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(props);
  const reduc = useSelector((state) => state);

  const { register, handleSubmit } = useForm({
    defaultValue: {
      //   ...editData
    },
  });
  const onSubmit = (data) => {
    data.id? data.id = data.id : data.id = uuidv4(); 

    const action = { type: "ADD_ITEM", payload: data };
    dispatch(action);
    setTimeout(() => navigate("/"), 200);
  };

  return (
    <div>
      <h1 className="pb-2">{props.title}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row pt-5">
          <div className="col-12 col-md-6 mb-4 pb-1">
            <input
              {...register("rasmi", { required: true })}
              className="form-control"
              placeholder="Mahsulot rasmi"
            />
          </div>
          <div className="col-12 col-md-6 mb-4 pb-1">
            <input
              {...register("nomi", { required: true })}
              className="form-control"
              placeholder="Mahsulot nomi"
            />
          </div>
          <div className="col-12 col-md-6 mb-4 pb-1">
            <input
              {...register("narxi", { required: true })}
              className="form-control"
              placeholder="Mahsulot narxi"
              //   DefaultValue='$'
            />
          </div>
        </div>

        <div className="mt-5">
          <button className="addBtn" onClick={() => navigate("/")}>
            Ortga qaytish
          </button>
          <button className="addBtn" type="submit">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
