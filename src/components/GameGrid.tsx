import {useEffect, useState} from "react";
import apiClients from "../services/api-clients.ts";
import {Spinner} from "@chakra-ui/react";

interface Game {
  id: number,
  name: string,
}

interface GamesResponse {
  count: number,
  next: string,
  previous: string,
  results: Game[]
}


function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    apiClients.get<GamesResponse>('/games').
    then(res => setGames(res.data.results)).
    catch((err) => setError(err.message)).
    finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div>
        {loading && <Spinner size={"xl"}/>}
        {error && <p>{error}</p>}
        {games.map(game => <p key={game.id}>{game.name}</p>)}
      </div>
    </>
  )
}

export default GameGrid;