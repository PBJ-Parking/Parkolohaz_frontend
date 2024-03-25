import { Outlet } from "react-router-dom";
import FoglalasArticle from "../components/FoglalasArticle";


 const Foglalas = () => {

  return (
    <>
      <main>
        <FoglalasArticle 
        
        />
        <Outlet />
      </main>
    </>
  );
};

export default Foglalas;