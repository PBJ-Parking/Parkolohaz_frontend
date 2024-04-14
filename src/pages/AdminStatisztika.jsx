

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "../css/kapcsolat.css" 

export default function AdminStatisztika(props) {

    return (
        <article>
         
    <Card border="info"  bg="light" style={{ width: '18rem' }}>
    <Card.Header>Parkolóhelyek</Card.Header>
   <Card.Body> <Link to="/admin/statisztikak/parkolohely">Foglaltság adatai</Link></Card.Body>
   <Card.Body> <Link to="/admin/statisztikak/parkolohely">Típusok szerinti megoszlás</Link></Card.Body>
      
  
    </Card>
    
        </article> 
    )
 
        
}