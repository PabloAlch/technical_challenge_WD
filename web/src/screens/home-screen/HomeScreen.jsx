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
    <div>
      <div className='d-flex justify-content-center py-5'>
      <h2>Welcome to the Store</h2>
      </div>
      <div className="d-flex flex-wrap">
      {phones.map((phone) => (
        <div className="col" key={phone.id}>
          <PhoneItem {...phone}/>
        </div>
      ))}
      
    </div>

    </div>
  )
}

export default HomeScreen