import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

// action creator
export const loadGames = () => async (dispatch) => {
  // fetch with axios
  // console.log(popularGamesURL());
  const popularData = await axios.get(popularGamesURL());
  const newGameData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};
