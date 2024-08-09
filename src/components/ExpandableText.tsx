import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

function ExpandableText({ children, maxChars = 300 }: Props) {
  if (children?.length <= maxChars) return <Text>children</Text>;
  const [showFullText, setShowFullText] = useState(false);
  let shownText = showFullText ? children : children.slice(0, maxChars) + "...";
  return (
    <>
      <Text>{shownText}</Text>
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme={"yellow"}
        onClick={() => setShowFullText(!showFullText)}
      >
        {showFullText ? "Show Less" : "Show More"}
      </Button>
    </>
  );
}

export default ExpandableText;
