import { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "../api/axios";
import AdminInputText from "./AdminInputText";
import AdminInputNumber from "./AdminInputNumber";
import AdminInputDate from "./AdminInputDate";
import AdminInputSelect from "./AdminInputSelect";
import AdminInputEmail from "./AdminInputEmail";
import AdminInputDateTime from "./AdminInputDateTime";
import AdminInputSelectQuery from "./AdminInputSelectQuery";
import AdminInputPassword from "./AdminInputPassword";

export default function AdminForm(props) {
  const [objektum, setObjektum] = useState(props.alapObj);

  function ertek_modositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
    console.log(objektum);
  }

  useEffect(() => {
    setObjektum(props.alapObj);
  }, [props]);

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
      props.frissites();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="admin-form py-3" onSubmit={elkuld} method="post">
      <Container
        className="admin-form-wrapper"
        style={{ display: "block", height: "auto" }}
      >
        <Row>
          {Object.keys(props.adatok).map(function (key, index) {
            return (
              <Fragment key={index}>
                {props.adatok[key].modosithato && (
                  <Col>
                    <div className="form-group">
                      <label className="p-0 m-0" htmlFor={"admin_form_" + key}>
                        {props.adatok[key].fejlec}:
                      </label>
                      <>
                        {props.adatok[key].tipus === "text" && (
                          <AdminInputText
                            name={key}
                            regex={props.adatok[key].regex}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "password" && (
                          <AdminInputPassword
                            name={key}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "email" && (
                          <AdminInputEmail
                            name={key}
                            regex={props.adatok[key].regex}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "number" && (
                          <AdminInputNumber
                            name={key}
                            min={props.adatok[key].min}
                            max={props.adatok[key].max}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "date" && (
                          <AdminInputDate
                            name={key}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "datetime" && (
                          <AdminInputDateTime
                            name={key}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "select" && (
                          <AdminInputSelect
                            name={key}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            lista={props.adatok[key].lista}
                            readOnly={false}
                          />
                        )}

                        {props.adatok[key].tipus === "selectQuery" && (
                          <AdminInputSelectQuery
                            name={key}
                            objektum={objektum[key]}
                            esemeny={ertek_modositas}
                            uri={props.adatok[key].uri}
                            readOnly={false}
                          />
                        )}
                      </>
                    </div>
                  </Col>
                )}
              </Fragment>
            );
          })}
        </Row>
      </Container>
      <Button
        variant="outline-success"
        as="input"
        type="submit"
        value="Felvitel"
      />{" "}
    </form>
  );
}
