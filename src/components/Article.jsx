import "../css/article.css"
import Kepnezegeto from "./Kepnezegeto";
import useAuthContext from "../contexts/AuthContext";
import Napi_arak from "./Napi_arak";

export default function Article() {

  const { user } = useAuthContext()

  return (
    <article>
      
      <h2>Üdvözöljük{user ? " "+ user.name : ""}!</h2>
   
      <Kepnezegeto />

     
    </article>
  );
}
