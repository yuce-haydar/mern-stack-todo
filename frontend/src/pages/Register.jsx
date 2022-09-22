import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { kullanici, isHata, isBasari, isYukleniyor, mesaj } = useSelector(
    (state) => state.auth
  ); //state e erişme

  //formdata ile girilen bilgileri tutuma nesnesi oluşturcaz
  const [formData, setFormData] = useState({
    kullaniciAd: " ",
    email: " ",
    parola: " ",
    parolakontrol: " ",
  });

  const { kullaniciAd, email, parola, parolakontrol } = FormData;

  const onChange = (e) => {
    setFormData((onceki) => ({
      ...onceki,
      [e.target.name]: e.target.value, //burda yakalıyor mu
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (parola !== parolakontrol) {
      console.log("eşleşmeyen parolalar");
    } else {
      const userData = {
        kullaniciAd,
        email,
        parola,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isHata) {
      console.error(mesaj+"");
    }
    if (isBasari || kullanici) {
      navigate("/");
    }
  }, [kullanici, isBasari, isHata, mesaj, navigate]); //bunlarda değişiklik olunca tetiklensin
  return (
    <>
      <section className="heading">
        <h1>
          <FaUserAlt />
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="kullaniciAd"
              name="kullaniciAd"
              value={kullaniciAd}
              placeholder="kullanici ad girinşz"
              onChange={onChange}
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="parolakontrol"
              name="parolakontrol"
              value={parolakontrol}
              placeholder="parolanızı tekrar girinşz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              {" "}
              Üye Ol knk
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
