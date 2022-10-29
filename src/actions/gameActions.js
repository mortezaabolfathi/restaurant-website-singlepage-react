import axios from "axios";
import { popularGamesURL, upcomingGames, newGamesURL } from "./../Api/api";

export const loadGames = () => async (dispatch) => {
  // console.log(popularGamesURL())
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGames());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results
    },
  });
};
