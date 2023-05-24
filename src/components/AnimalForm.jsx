import { useState } from "react";
import { Link } from "react-router-dom";

const AnimalForm = ({ addAnimal }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sector, setSector] = useState("");

  const onInputNameChange = (e) => {
    setName(e.target.value);
  };

  const onInputSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const onInputDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const onInputSectorChange = (e) => {
    setSector(e.target.value);
  };

  console.log(addAnimal);

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" onChange={onInputNameChange} />

        <label>Species</label>
        <input type="text" onChange={onInputSpeciesChange} />

        <label>Date of Birth</label>
        <input type="date" onChange={onInputDateOfBirthChange} />

        <select onSelect={onInputSectorChange}>
          <option value="bird">Bird</option>
          <option value="snake">Snake</option>
        </select>

        <button
          onClick={(e) => addAnimal(e, name, species, dateOfBirth)}
          type="submit"
        >
          Add animal
        </button>
      </form>
    </div>
  );
};

export default AnimalForm;
