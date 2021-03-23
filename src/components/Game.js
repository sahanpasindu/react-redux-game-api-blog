import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// styles
import styled from "styled-components";
// animations
import { motion } from "framer-motion";
import { popup } from "../animations";
// util
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  // convert path id to string to make transaction animation works, they should be same data type
  const stringPathId = id.toString();
  // load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>Release Date : {released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
