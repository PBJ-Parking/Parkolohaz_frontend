import "bootstrap/dist/css/bootstrap.min.css";
import Email from "./Email";


export default function Kapcsolat() {
    return(

  <div>    
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Telefon: +36-89-654-987</li>
    <li className="list-group-item">Cím: 4432 Település, Nincs ilyen utca 4.</li>
  
    <li  className="list-group-item">E-mail: tesztbibanka@gmail.com   <a href="/email" class="card-link" >E-mailt küldök</a></li> 
  </ul>
 
 </div> 






)
    }