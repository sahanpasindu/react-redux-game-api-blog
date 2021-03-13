import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="home">
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
