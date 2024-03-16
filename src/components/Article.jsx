import "../css/article.css"
import Kepnezegeto from "./Kepnezegeto";


export default function Article(props) {

  return (
    <article>
      <h2>Üdvözöljük {props.nev}!</h2>

      <Kepnezegeto />

      <h3>Rólunk</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        maiores in distinctio exercitationem, vitae consectetur ipsa enim, omnis  
        at nobis eos quisquam eveniet qui? Veniam enim recusandae inventore
        molestiae perspiciatis. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Voluptates reiciendis laboriosam fugit quia non, minus
        soluta alias hic officiis id odit quo vel? Animi sit quaerat expedita
        natus consequatur earum!
      </p>
    </article>
  );
}
