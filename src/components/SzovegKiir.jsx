import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";



export default function SzovegKiir(props){
  
 return(
  <Container fluid className="rolunk-container">
   <div>
      <h1>{props.cim}</h1>
      <span>{props.tartalom}</span>
     
    </div>
    </Container>
 )  
 }