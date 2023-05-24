import { Link } from "react-router-dom";

const Animal = ({ animal, index }) => {
  return (
    <tr key={index}>
      <td>{animal.name}</td>
      <td>{animal.species}</td>
      <td>{animal.sector}</td>
      <td>{animal.date_of_birth ? animal.date_of_birth : "Nepoznato"}</td>
      <Link to={`/animals/${index}`}>See</Link>
    </tr>
  );
};

export default Animal;
