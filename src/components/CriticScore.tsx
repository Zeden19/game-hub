import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function CriticScore({ metacritic }: Props) {
  let color = metacritic > 75 ? 'green' : metacritic < 40 ? 'yellow' : '';
  return (
    <>
      <Badge
        borderRadius={"4px"}
        paddingX={"5px"}
        fontSize={"14px"}
        style={{ textAlign: "end" }}
        colorScheme={color}
      >
        {metacritic}
      </Badge>
    </>
  );
}

export default CriticScore;
