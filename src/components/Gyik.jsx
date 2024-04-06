import lista from "../data/gyik.js"
import SzovegKiir from "./SzovegKiir"

export default function Gyik() {
    const $cim = "Gyakran ismételt kérdések";
   
    const $tartalom = lista.map((value, index) => {
        return (<SzovegKiir key={index} cim={value.kerdes} tartalom={value.valasz} />)

    })


    return (
        <article>

            <SzovegKiir cim={$cim} tartalom={$tartalom} />
        </article>

    )
}