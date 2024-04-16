import Kepnezegeto from "./Kepnezegeto";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Napi_arak from "./Napi_arak";
import MaxKedvezmeny from "./MaxKedvezmeny";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/fooldalArticle.css";
export default function FooldalArticle() {


  return (

<article className="fooldalArticle">



<Container fluid className="fooldal-container">
   
<Row>
<Col><MaxKedvezmeny/></Col>
 </Row>
  <Row>
  <Col><h1> Napijegy áraink:</h1>{ <Napi_arak/>}</Col>
  <Col className="d-none d-sm-block" ><Kepnezegeto /></Col>
  </Row>
  <Row className="d-sm-none" >
  <Col ><Kepnezegeto /></Col>
  </Row>
  </Container>
  
  </article>
    
    
  );
}
