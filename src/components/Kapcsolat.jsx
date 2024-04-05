import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Email from "./Email";
import "../css/kapcsolat.css" 


export default function Kapcsolat() {
    return(

  <div>    
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Telefon: +36-89-654-987</li>
    <li className="list-group-item">Cím: 4432 Település, Nincs ilyen utca 4.</li>
  
    <li  className="list-group-item">E-mail: tesztbibanka@gmail.com   <Link to="/Email"  ><i class="bi bi-envelope-at-fill"></i> E-mailt küldök</Link></li> 
  </ul>
 
 </div> 






)
    }