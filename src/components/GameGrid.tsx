import { Spinner } from "@chakra-ui/react";
import useGames from "../services/useGames.ts";

function GameGrid() {
  const { loading, error, games } = useGames();
  return (
    <>
      <div>
        {loading && <Spinner size={"xl"} />}
        {error && <p>{error}</p>}
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GameGrid;
