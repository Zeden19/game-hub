import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={"20px"} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
