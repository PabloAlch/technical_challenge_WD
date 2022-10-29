import * as phoneService from '../../services/phones-service'
import React, { useState, useEffect } from 'react';
import PhoneItem from '../../components/phones/phone-list/PhoneItem';



function HomeScreen() {
  const [phones, setPhones] = useState([]);
  
  useEffect(() => {
    phoneService.allPhones()
      .then(phones => setPhones(phones))
      .catch(error => console.error(error));
  }, [])
  return (
    <>
      <div className="">
      {phones.map((phone) => (
        <div className="col" key={phone.id}>
          <PhoneItem {...phone}/>
        </div>
      ))}
      patata
    </div>

    </>
  )
}

export default HomeScreen