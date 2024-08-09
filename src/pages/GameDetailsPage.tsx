import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameDetails from "../components/GameDetails.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenShots from "../components/GameScreenShots.tsx";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);
  return (
    <SimpleGrid marginX={8} columns={{base: 1, md: 2}} spacing={3}>
      <Box>
        <Heading>{data?.name}</Heading>
        <ExpandableText>{data ? data?.description_raw : ""}</ExpandableText>
        <GameDetails data={data} />
      </Box>
      <Box >
        <GameTrailer slug={data?.slug} />
        <GameScreenShots slug={data?.slug} />
      </Box>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
