import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames.ts";
import Platforms from "./Platforms.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  game: Game;
  loading: boolean;
}

function GameCard({ game, loading }: Props) {
  console.log(loading);
  return (
    <Card
      transition={"0.15s"}
      _hover={{ transform: "scale(1.04)", filter: "brightness(110%)" }}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Platforms platforms={game.parent_platforms} />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
