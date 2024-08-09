import {useParams} from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import {Heading, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";

function GameDetailsPage() {
  const {slug} = useParams();
  const {data, isLoading, error} = useGameDetails(slug!);
  
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data ? data?.description_raw : ""}</ExpandableText>
    </>
  )
}

export default GameDetailsPage;