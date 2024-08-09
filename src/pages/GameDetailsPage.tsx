import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import {Grid, GridItem, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttribute from "../components/GameAttribute.tsx";
import CriticScore from "../components/CriticScore.tsx";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);
  if (!data) return null;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data ? data?.description_raw : ""}</ExpandableText>

      <SimpleGrid marginLeft={5} columns={2} as={"dl"}
      >
        <GridItem>
          <GameAttribute title={"MetaScore"}>
            <CriticScore metacritic={data?.metacritic}></CriticScore>
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Platforms"}>
            {data?.parent_platforms.map((platform) => (
              <Text key={platform.platform.id}>{platform.platform.name}</Text>
            ))}
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Genres"}>
            {data?.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Publisher"}>
            {data?.publishers.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
          </GameAttribute>
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default GameDetailsPage;
