import { useParams } from "react-router-dom";
import AnimalId from "../comp/AnimalId";

const SingleAnimal = ({ animals }) => {
  const { id } = useParams();
  return <AnimalId animals={animals} index={id} />;
};

export default SingleAnimal;
