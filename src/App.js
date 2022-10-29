import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gameActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const games = useSelector((state) => state.games )
  // console.log("games is :", games)
  
  return (
    <div>
      <h1>this is app </h1>
    </div>
  );
};

export default App;
