import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GameAttribute from "./GameAttribute.tsx";
import CriticScore from "./CriticScore.tsx";
import Game from "../entities/Game.ts";

interface Props {
  data: Game | undefined;
}

function GameDetails({ data }: Props) {
  if (!data) return null;
  return (
    <>
      <SimpleGrid columns={2} as={"dl"}>
        <GridItem>
          <GameAttribute title={"MetaScore"}>
            <CriticScore metacritic={data?.metacritic}></CriticScore>
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Platforms"}>
            {data?.parent_platforms.map((platform) => (
              <Text key={platform.platform.id}> {platform.platform.name} </Text>
            ))}
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Genres"}>
            {data?.genres.map((genre) => (
              <Text key={genre.id}> {genre.name} </Text>
            ))}
          </GameAttribute>
        </GridItem>

        <GridItem>
          <GameAttribute title={"Publisher"}>
            {data?.publishers.map((publisher) => (
              <Text key={publisher.id}> {publisher.name} </Text>
            ))}
          </GameAttribute>
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default GameDetails;
