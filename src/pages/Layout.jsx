import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
    <main>
      <Header/>
      <Nav />
    
    </main>
      
        <Outlet />
    
    </>
  );
};
export default Layout;
