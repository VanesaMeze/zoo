import Animal from "./Animal";
import { Link } from "react-router-dom";

const AllAnimals = ({ animals }) => {
  return (
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Species</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>See Animal</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index} />
          ))}
        </tbody>
      </table>
      <div>
        <Link to={`/AddAnimal`}>Add Animal</Link>
      </div>
    </div>
  );
};

export default AllAnimals;
