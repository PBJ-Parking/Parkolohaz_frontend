import Kepnezegeto from "./Kepnezegeto";
import useAuthContext from "../contexts/AuthContext";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Napi_arak from "./Napi_arak";

export default function FooldalArticle() {
 // const { user } = useAuthContext()

  return (
    <Container fluid className="fooldal-container">
   
  
  <div className="row">

      <div className="col"><h1> Napijegy áraink:</h1>{ <Napi_arak/>}</div>
     
      <div className="col"><Kepnezegeto /></div>
      
    
      </div>
     
     
      </Container>
      
  );
}
