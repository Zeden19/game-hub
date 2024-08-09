import {useParams} from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import Header from "../components/Header.tsx";
import {Heading, Text} from "@chakra-ui/react";

function GameDetailsPage() {
  const {slug} = useParams();
  const {data, isLoading, error} = useGameDetails(slug!);
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  )
}

export default GameDetailsPage;