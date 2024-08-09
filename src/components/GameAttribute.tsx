import React, { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

function GameAttribute({ children, title }: Props) {
  if (!children) return null;

  return (
    <Box marginY={5}>
      <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
        {title}
      </Heading>
      <dd> {children}</dd>
    </Box>
  );
}

export default GameAttribute;
