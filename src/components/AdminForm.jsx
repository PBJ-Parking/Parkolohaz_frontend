import { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "../api/axios";

export default function AdminForm(props) {
  const [objektum, setObjektum] = useState(props.alapObj);
  const adatok = props.adatok;
  function ertekmodositas(event) {
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
      <Container className="admin-form-wrapper" b style={{ display: "block", height: "auto" }}>
        <Row>
          {Object.keys(adatok).map(function (index) {
            return (
              <Fragment key={index}>
                {adatok[index].modosithato && (
                  <Col>
                    <div>
                      <label
                        className="p-0 m-0"
                        htmlFor={"admin_form_" + index}
                      >
                        {adatok[index].fejlec}:
                      </label>
                      <input
                        id={"admin_form_" + index}
                        name={index}
                        value={objektum[index] || adatok[index].alapertek}
                        onChange={ertekmodositas}
                        type={adatok[index].tipus}
                      />
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
