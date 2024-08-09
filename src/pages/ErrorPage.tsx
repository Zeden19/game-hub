import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation.tsx";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Navigation />
      <Box paddingLeft={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "page does not exist"
            : "Sorry, unexpected error has occurred"}
        </Text>
        <NavLink to={"/"}>Back to Home</NavLink>
      </Box>
    </>
  );
}

export default ErrorPage;
