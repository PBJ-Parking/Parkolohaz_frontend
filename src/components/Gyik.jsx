import text from "../data/gyik.js"
import SzovegKiir from "./SzovegKiir"

export default function Gyik(){
    const $cim="Gyakran ismételt kérdések";
    const $tartalom=text;
   return (
    <article>
    <SzovegKiir cim={$cim} tartalom={$tartalom}/>
    </article>
   
   ) 
}