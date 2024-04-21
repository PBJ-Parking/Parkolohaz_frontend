

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../css/kapcsolat.css" 
import "../css/fooldalArticle.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AdminStatisztika(props) {

    return (
        <article className="fooldalArticle">
   
   <Row  xs={1} sm={2} md={2} lg={3} className="g-4">  
   <Col>  
    <Card border="info"  bg="light" style={{ maxWidth: '22rem', width:'100%' }}>
    <Card.Header><h5 className="text-center m-0">Parkolóhelyek</h5></Card.Header>
   <Card.Body> 
    <Container className="kartya" >
   <Row ><Link to="/admin/statisztikak/parkolohely">Státusz adatok</Link></Row>
   <Row ><Link to="/admin/statisztikak/parkolohelyTipusok">Típusok szerinti megoszlás</Link></Row>
   </Container>
   </Card.Body>
    </Card>
    </Col>
    <Col>  
    <Card border="info"  bg="light" style={{ maxWidth: '22rem' , width:'100%' }}>
    <Card.Header><h5  className="text-center m-0">Járművek</h5></Card.Header>
   
   <Card.Body>
   <Container>
    <Row> <Link to="/admin/statisztikak/jarmuTipusok">Típusok szerinti megoszlás</Link></Row>
   </Container> 
   </Card.Body>
    </Card>
    </Col>
   
    </Row> 
  
        </article> 
    )
 
        
}