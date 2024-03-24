import { Outlet } from "react-router-dom";
import ProfileArticle from "../components/ProfileArticle";

export default function Profile () {

  return (
    <>
      <main>
        <ProfileArticle />
        <Outlet />
      </main>
    </>
  );
};

