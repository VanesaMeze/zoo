import { useState } from "react";
import AnimalForm from "./AnimalForm";
import AnimalsDisplay from "./AnimalsDisplay";
import SectorsDisplay from "./SectorsDisplay";

const listOfAnimals = [
  {
    name: "krava",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
  {
    name: "delfin",
    species: "mammal",
    sector: "snake",
  },
  {
    name: "koza",
    species: "mammal",
    sector: "bird",
  },
  {
    name: "ovca",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "bird",
  },
  {
    name: "pas",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "bird",
  },
];

const animalSectors = ["bird", "snake"];

const AnimalList = () => {
  //IDE HOOK
  const [animals, setAnimals] = useState(listOfAnimals);

  const [state, setState] = useState({
    name: "",
    species: "",
    date_of_birth: "",
    sector: "",
  });

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };

  const onMoveToTop = (name) => {
    setAnimals(
      (prevState) =>
        (prevState = [
          prevState.filter((animal) => animal.name === name)[0],
          ...prevState.filter((animal) => animal.name !== name),
        ])
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSector = (sector) => {
    let sectorAnimals = animals.filter((animal) => animal.sector == sector);
    let animalsCombined = "";
    sectorAnimals.forEach((animal) => (animalsCombined += animal.name + " "));
    alert(animalsCombined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.sector);

    let newAnimal = {
      name: state.name,
      species: state.species,
      date_of_birth: state.date_of_birth,
      sector: state.sector,
    };
    console.log(state);

    setAnimals((prevState) => (prevState = [...prevState, newAnimal]));
  };

  return (
    <div>
      <AnimalForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        state={state}
      />
      <AnimalsDisplay
        animals={animals}
        onRemove={onRemove}
        onMoveToTop={onMoveToTop}
      />
      <SectorsDisplay
        animals={animals}
        animalSectors={animalSectors}
        onSector={onSector}
      />
    </div>
  );
};

export default AnimalList;
