import Kepnezegeto from "./Kepnezegeto";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Napi_arak from "./Napi_arak";
import MaxKedvezmeny from "./MaxKedvezmeny";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FooldalArticle() {


  return (

<article>
  <table>
<tr><Container fluid><MaxKedvezmeny/></Container></tr>
<tr>
<Container fluid className="fooldal-container">
   
    
  <Row className="row ">
  <Col className="col"><h1> Napijegy áraink:</h1>{ <Napi_arak/>}</Col>
  <Col className="col" ><Kepnezegeto /></Col>
  </Row>
  </Container>
  </tr>
  </table>
  </article>
    
    
  );
}
