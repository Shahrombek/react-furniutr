import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrm from "../../Components/Button";
import algorismic from "../../Assets/images/image 1.png";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  const datas = Object.values(data);

  const trash = (data) => {
    const action = { type: "DELETE_ITEM", payload: data };
    dispatch(action);
  };

  const [editTask, setEditTask] = useState([]);
  const edit = (data) => {
    setEditTask([...editTask, data]);
    navigate("/edit");
  };

  return (
    <main>
      <h1>Mahsulotlar</h1>
      <span style={{ marginTop: "30px" }} onClick={() => navigate("add")}>
        <ButtonPrm color="black">
          <FontAwesomeIcon icon={faPlus} />
        </ButtonPrm>
      </span>

      <section>
        <div className="row pt-5">
          {datas.map((data) => {
            return (
              <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="px-1">
                  <div className="card">
                    <img className="card-img" src={data.rasmi} />
                    <div>
                      <span onClick={() => edit(data)}>
                        <ButtonPrm color="yellow">
                          <FontAwesomeIcon icon={faPen} />
                        </ButtonPrm>
                      </span>
                      <span onClick={() => trash(data)}>
                        <ButtonPrm color="red">
                          <FontAwesomeIcon icon={faTrash} />
                        </ButtonPrm>
                      </span>
                    </div>
                  </div>
                  <p>{data.nomi}</p>
                  <span>{data.narxi}$</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <hr />
        <div className="algorismic">
          <img src={algorismic} />
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
