import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export default function AdminForm(props) {
  const [objektum, setObjektum] = useState(props.alapObj);
  const adatok = props.adatok;
  function ertekmodositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
    console.log(objektum);
  }

  function elkuld(event) {
    event.preventDefault();
    axiosPost();
  }

  const csrf = async () => {
    try {
      const { data: token } = await axios.get("/token");
      return token;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  async function axiosPost() {
    try {
      const response = await axios.post(props.apik.storeUrl, {
        ...objektum,
        _token: await csrf(),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="admin-form py-3" onSubmit={elkuld} method="post">
      <div className="admin-form-wrapper">
        {Object.keys(adatok).map(function (index) {
          return (
            <Fragment key={index}>
              {adatok[index].modosithato && (
                <div className="d-flex gap-3 align-items-center justify-content-between">
                  <label className="p-0 m-0" htmlFor={"admin_form_" + index}>
                    {index}:
                  </label>
                  <input
                    id={"admin_form_" + index}
                    name={index}
                    value={objektum[index] || adatok[index].alapertek}
                    onChange={ertekmodositas}
                    type={adatok[index].tipus}
                  />
                </div>
              )}
            </Fragment>
          );
        })}
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
