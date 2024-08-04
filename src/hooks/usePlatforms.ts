import useData from "./useData.ts";
import {Platform} from "./useGames.ts";
import platforms from "../data/platforms.ts";

const usePlatforms = () => ({data: platforms, loading: false, error: false})

export default usePlatforms;