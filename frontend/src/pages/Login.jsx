
import React, { useState } from "react";
import { FaUserCheck } from "react-icons/fa";

function login() {
  
  //formdata ile girilen bilgileri tutuma nesnesi oluşturcaz
  const [formData,setFormData ] = useState({
   
    email: ' ',
    parola: ' ',
   
  });

   const { email, parola}  = FormData;

  const onChange = (e) => {
    setFormData((onceki)=>({
      ...onceki,
      [e.target.name]:e.target.value //burda yakalıyor mu
    }))
  };

  const onSubmit = (e) => {

     e.preventDefault()
   console.log(FormData)
  };
  
  return (
    <>
      <section className="heading">
        <h1>
          <FaUserCheck />  Giriş yap
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
       
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email      girinşz"
              onChange={onChange}
            />
          </div>
          
          
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="parola"
              name="parola"
              value={parola}
              placeholder="parolagirinşz"
              onChange={onChange}
            />
          </div>
        
          <div className="form-group" >
            <button type="submit"  className="btn btn-block"> giriş yap knk</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default login;
