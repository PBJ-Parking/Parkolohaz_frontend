import "../css/article.css"
import Kepnezegeto from "./Kepnezegeto";
import useAuthContext from "../contexts/AuthContext";

export default function AdminFoodal() {

  const { user } = useAuthContext()

  return (
    <article>
      
      <h2>Üdvözöljük{user ? " "+ user.name : ""}!</h2>
   
      <Kepnezegeto />

     
    </article>
  );
}
