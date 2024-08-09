import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle.tsx";
import Search from "./Search.tsx";
import {NavLink, Outlet} from "react-router-dom";

function Navigation() {
  return (
    <>
      <HStack marginX={2} marginY={1} padding={"10px"}>
        <NavLink to={"/"}><Image objectFit={"cover"} boxSize={"4em"} src={logo}></Image></NavLink>
        <Search />
        <ColorModeToggle></ColorModeToggle>
      </HStack>
      <Outlet />
    </>
  );
}

export default Navigation;
