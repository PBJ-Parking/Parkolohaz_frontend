import "../css/article.css"
import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function ProfileArticle() {

    const { user } = useAuthContext()
    const [jarmu, setJarmu] = useState([]);
    
    const adatlekeres = async () =>{
    const {data}= await axios.get("api/authAdatok") 
        
    setJarmu(data);
    console.log(data);
    };
  
   useEffect(() => {
     adatlekeres();
   }, []);
    const UserAdatok = [
        "Telefonszám: " + user.telefonszam, 
        "Cím: " + user.cim, 
        "Email: " + user.email, 
        "Jelszó: ***********", 
        "Adószám: " + user.adoszam, 
        "Rendszám: " + jarmu.rendszam]

    return (
        <article>
            <h1>Profilom</h1>
            <div className="userNeveEsKepe">
                <h2>{user ? " " + user.name : ""} <button>Módosít</button></h2>
            </div>
            <div className="UserTovabbiAdatai">
                <ul>
                    {UserAdatok.map((elem, index) => {
                        console.log(elem, index)
                    })}

                </ul>
            </div>
        </article>
    );
}
