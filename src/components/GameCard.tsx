import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames.ts";
import Platforms from "./Platforms.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.id}`}>
      <Card
        margin={1}
        transition={"0.15s"}
        _hover={{ transform: "scale(1.02)", filter: "brightness(110%)" }}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent={"space-between"}>
            <Platforms parent_platforms={game.parent_platforms} />
            <CriticScore metacritic={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emoji rating={game.rating_top}></Emoji>
        </CardBody>
      </Card>
    </Link>
  );
}

export default GameCard;
