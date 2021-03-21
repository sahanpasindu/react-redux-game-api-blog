import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

// action creators
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

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGame = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FEATCH_SEARCHED",
    payload: {
      searched: searchGame.data.results,
    },
  });
};
