import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export default function AdminForm(props) {
  const [objektum, setObjektum] = useState({});

  function ertekmodositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
  }

  function elkuld(event) {
    event.preventDefault();
    axiosPost();
  }

  async function axiosPost() {
    try {
      const response = await axios.post(`api/felhasznalok`, objektum);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="admin-form py-3" onSubmit={elkuld} method="post">
      <div className="admin-form-wrapper">
        {Object.keys(props.obj).map(function (index) {
          return (
            <Fragment key={index}>
              {index !== "created_at" &&
                index !== "updated_at" &&
                index !== "id" &&
                index !== "email_verified_at" && (
                  <div className="d-flex gap-3 align-items-center justify-content-between">
                    <label className="p-0 m-0" htmlFor={"admin_form_" + index}>
                      {index}:
                    </label>
                    <input
                      id={"admin_form_" + index}
                      name={index}
                      value={objektum[index] || ""}
                      onChange={ertekmodositas}
                    />
                  </div>
                )}
            </Fragment>
          );
        })}

        <div className="d-flex gap-3 align-items-center justify-content-between">
          <label className="p-0 m-0" htmlFor={"admin_form_" + "password"}>
            jelszó:
          </label>
          <input
            id={"admin_form_" + "password"}
            name="password"
            onChange={ertekmodositas}
            type="password"
            value={objektum["password"] || ""}
          />
        </div>
      </div>
      <Button
        variant="outline-success"
        as="input"
        type="submit"
        value="Felvitel"
      />{" "}
    </form>
  );
}
