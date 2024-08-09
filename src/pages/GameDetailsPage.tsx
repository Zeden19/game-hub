import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import { Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameDetails from "../components/GameDetails.tsx";
import GameTrailer from "../components/GameTrailer.tsx";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data ? data?.description_raw : ""}</ExpandableText>
      <GameDetails data={data} />
      <GameTrailer slug={data?.slug} />
    </>
  );
}

export default GameDetailsPage;
