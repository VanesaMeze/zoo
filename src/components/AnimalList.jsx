import { useState } from "react";

const listOfAnimals = [
  {
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "bird",
  },
  {
    name: "delfin",
    species: "mamel",
    sector: "bird",
  },
  {
    name: "koza",
    species: "mamel",
    sector: "bird",
  },
  {
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
  {
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
];

const animalSector = ["bird", "snake"];

const AnimalList = () => {
  //IDE HOOK
  const [animals, setAnimals] = useState(listOfAnimals);
  const [animalSectors, setAnimalSectors] = useState(animalSector);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sector, setSector] = useState("");

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name === name)
    );
  };

  const onTop = (index) => {
    const topAnimal = animals[index];
    setAnimals((prevState) => [
      topAnimal,
      ...prevState.filter((_, id) => id !== index),
    ]);
  };

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

  const addAnimal = (e) => {
    e.preventDefault();

    setAnimals((prevState) => [
      ...prevState,
      {
        name: name,
        species: species,
        date_of_birth: dateOfBirth,
      },
    ]);
  };

  const showAnimals = (sectorName) => {
    alert(
      animals
        .filter((animal) => animal.sector === sectorName)
        .map((animal) => animal.name)
    );
  };

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

        <button onSubmit={addAnimal} type="submit">
          Add Animal
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Sektor zivotinje</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.date_of_birth}</td>
              <td>{animal.sector}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
                <button onClick={() => onTop(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Ime sektora</th>
            <th>Show</th>
          </tr>
        </thead>
        <tbody>
          {animalSectors.map((sector, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{sector}</td>
              <td>
                <button onClick={() => showAnimals(sector)}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;