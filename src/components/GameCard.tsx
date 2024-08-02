import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import { Game } from "../services/useGames.ts";
import Platforms from "./Platforms.tsx";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      transition={"0.15s"}
      _hover={{transform: "scale(1.04)", filter: "brightness(110%)"}}
      borderRadius={"10px"}
      overflow={"hidden"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Platforms platforms={game.parent_platforms} />
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
