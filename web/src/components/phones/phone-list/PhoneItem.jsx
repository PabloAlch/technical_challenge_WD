import React from "react";
import { Link } from "react-router-dom";

function PhoneItem({
  name,
  processor,
  price,
  color,
  imageFileName,
  screen,
  id,
}) {
  return (
    <>
      <div className="card m-3" style={{ width: 300, }}>
        <div className="d-flex justify-content-center">
          <h5 className="card-title">{name}</h5>
        </div>
        <img className="" style={{ height: 330 }} src={`../../../../assets/images/${imageFileName}`} alt={name} />

        <div className="card-body">
          <p className="card-text">
            <b>Color: </b>
            {color}
          </p>
          <p className="card-text">
            <b>processor: </b>
          </p>
          <p className="card-text">
            <b>screen: </b>
            {screen}
          </p>
          <p className="card-text">
            <b>price: </b>
            {price}
          </p>
          <p className="card-text">
            <b>processor: </b>
            {processor}
          </p>
          <div className="d-flex justify-content-center">
            <h3 className="">€ {price}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to={`/phones/${id}`}
              className="text-decoration-none text-reset link-primary"
            >
              <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneItem;
