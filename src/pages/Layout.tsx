import Navigation from "../components/Navigation.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
      <Navigation/>
      <Outlet/>
    </>
  )
}

export default Layout;