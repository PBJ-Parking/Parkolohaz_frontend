

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../css/kapcsolat.css" 
import "../css/fooldalArticle.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AdminStatisztika(props) {

    return (
        <article>
    <Container fluid className="fooldal-container">
   <Row>  
   <Col>  
    <Card border="info"  bg="light" style={{ width: '18rem' }}>
    <Card.Header>Parkolóhelyek</Card.Header>
   <Card.Body> <Link to="/admin/statisztikak/parkolohely">Foglaltság adatai</Link></Card.Body>
   <Card.Body> <Link to="/admin/statisztikak/parkolohelyTipusok">Típusok szerinti megoszlás</Link></Card.Body>
    </Card>
    </Col>
    <Col>  
    <Card border="info"  bg="light" style={{ width: '18rem' }}>
    <Card.Header>Jarmuvek</Card.Header>
   
   <Card.Body> <Link to="/admin/statisztikak/jarmuTipusok">Típusok szerinti megoszlás</Link></Card.Body>
    </Card>
    </Col>
    <Col></Col>
    </Row> 
    </Container>
        </article> 
    )
 
        
}