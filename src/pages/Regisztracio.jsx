import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../contexts/AuthContext";
import "../css/regisztracio.css"


export default function Regisztracio() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [megrendeloTipus, setMegrendelo_Tipus] = useState("");
  const [adoszam, setAdoszam] = useState("");

  const [validaciosError, setValidaciosError] = useState("");



  const { loginReg, errors } = useAuthContext();



  const handleSubmit = async (e) => {
    e.preventDefault();
    //await csrf();
if(name.length<1 || name.length>255 ){
  setValidaciosError("A névnek 1-255 karakter között kell lennie.")
  return;

}

if(email.length<1 || !/[a-z0-9]@[a-z0-9].[a-z]{2,3}/.test(email) ){
  setValidaciosError("Az email üres vagy nem megfelelő formátumú.")
  return;

}

if(password.length<8 || password.length>16 ){
  setValidaciosError("A jelszó 8 és 16 karakter közötti.")
  return;

}

if(password!==password_confirmation){
  setValidaciosError("A két jelszó nem egyezik.")
  return;

}
if(megrendeloTipus===""){
  setValidaciosError("Válasszon magánszemély vagy cég.")
  return;

}


if(adoszam.length!==13 || !/^\d+$/.test(adoszam) ){
  setValidaciosError("Az adószám 13 karakerű, csak számok.")
  return;

}
setValidaciosError("")
    const adat = {
      name: name,

      email: email,
      password: password,
      password_confirmation: password_confirmation,
      //_token: token,
      megrendelo_tipus: megrendeloTipus,
      adoszam: adoszam,
    };

    loginReg(adat, "/register");


  };

 /* let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      //console.log(response);
      token = response.data;
    });
    */


  return (
    <>
   
    <div className="m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Regisztráció</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Név:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="name"
            placeholder="név"
            name="name"
          />
        </div>
        <div>
          {errors.name && (
            <span className="text-danger">{errors.name[0]}</span>
          )}
        </div>


        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          {errors.email && (
            <span className="text-danger">{errors.email[0]}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Jelszó:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
        </div>
        <div>
          {errors.password && (
            <span className="text-danger">{errors.password[0]}</span>
          )}
        </div>


        <div className="mb-3">
          <label htmlFor="pwd2" className="form-label">
            Jelszó mégegyszer:
          </label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            className="form-control"
            id="pwd2"
            placeholder="jelszó mégegyszer"
            name="pwd2"
          />
          <div>
            {errors.password_confirmation && (
              <span className="text-danger">{errors.password_confirmation[0]}</span>
            )}
          </div>

         
        <div className="mb-3" >
          <label htmlFor="tipus" className="form-label">
            Magánszemély vagyok
            </label>
           
            <input
              type="radio"
              value="M"
              onChange={(e) => {
                setMegrendelo_Tipus(e.target.value);
              }}
              className="radio"
              id="tipus_maganszemely"

              name="megrendelo_tipus"
            />
          <div>
            {errors.megrendelo_tipus && (
              <span className="text-danger">{errors.megrendelo_tipus[0]}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="tipus" className="form-label">
              Cég vagyok

              <input
                type="radio"
                value="C"
                onChange={(e) => {
                  setMegrendelo_Tipus(e.target.value);
                }}
                className="radio"
                id="tipus_ceg"
                
                name="megrendelo_tipus"
                />
            </label>
            <div>
              {errors.megrendelo_tipus && (
                <span className="text-danger">{errors.megrendelo_tipus[0]}</span>
              )}
            </div>


            <label htmlFor="adoszam" className="form-label">
              Adószám:
            </label>
            <input
              type="text"
              value={adoszam}
              onChange={(e) => {
                setAdoszam(e.target.value);
              }}
              className="form-control"
              id="adoszam"
              placeholder="adószám"
              name="adoszam"
            />
          </div>
          <div>
            {errors.adoszam && (
              <span className="text-danger">{errors.adoszam[0]}</span>
            )}
          </div>

    {validaciosError!=="" && <p>{validaciosError}</p>}

          <div className=" text-center">
            <button type="submit" className="btn btn-primary w-100">
              Regisztrálok
            </button>

          </div>
        </div>
    </div>
      </form >
    </div >
    </>
  );
}