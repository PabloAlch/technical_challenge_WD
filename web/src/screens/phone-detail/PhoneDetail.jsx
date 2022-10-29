import React, { useState, useEffect } from "react";
import * as phoneService from "../../services/phones-service";
import { useParams } from "react-router-dom";

function PhoneDetail() {
  const [phone, setPhone] = useState(null);

  const { id } = useParams();

  console.log(phone);

  useEffect(() => {
    phoneService
      .detailPhone(id)
      .then((phone) => setPhone(phone))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="container">
        {phone ? (
          phone.map((phone) => (
            <div key={phone.id} className="row mt-3">
              <div className="col-12 col-sm-6">
                <img
                  className="w-100"
                  src={`../assets/images/${phone.imageFileName}`}
                  alt={phone.name}
                />
                <div className="d-flex justify-content-center">
                  <div
                    className="rounded-circle"
                    style={{
                      height: 20,
                      width: 20,
                      backgroundColor: `${phone.color}`,
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <h1 className="text-center">{phone.name}</h1>
                <p>
                  <b> {phone.manufacturer.toUpperCase()} </b>
                </p>
                <p>
                  {" "}
                  <b>Chip: </b>
                  {phone.processor}
                </p>
                <p>
                  {" "}
                  <b>Screen size: </b>
                  {phone.screen}
                </p>
                <p>
                  {" "}
                  <b>Description: </b>
                  {phone.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 d-flex justify-content-center">Loading</div>
        )}
      </div>
    </>
  );
}

export default PhoneDetail;
