import React from "react";

function PhoneItem({ name, processor, price, color, imageFileName, screen }) {
  return (
    <>
      <div className="card m-3" style={{ width: 250 }}>
          <div className="d-flex justify-content-center">

          <h5 className="card-title">{name}</h5>
          </div>
        <img src={`../../../../../assets/images/${imageFileName}.png`} className="card-img-top" alt={imageFileName} />
        <div className="card-body">
          <p className="card-text">
            <b>Color: </b>{color}
            <b>Color: </b>{imageFileName}

          </p>
          <p className="card-text">
            <b>processor: </b>{`../../../../../assets/images/${imageFileName}`}
          </p>
          <p className="card-text">
            <b>screen: </b>{screen}
            <b>screen: </b>{screen}
            <img src="../../../../../assets/images/Galaxy_S7.png" alt={imageFileName} />
            <img src="../../../../../assets/images/Galaxy_S7.png" alt={imageFileName} />
          </p>
          <p className="card-text">
            <b>price: </b>{price}
          </p>
          <p className="card-text">
            <b>processor: </b>{processor}
          </p>
          <div className="d-flex justify-content-center">
          <h3 className="">
            € {price}
          </h3>
          </div>
          <div className="d-flex justify-content-center">
          <button className="btn btn-primary">
            More Details
          </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default PhoneItem;
