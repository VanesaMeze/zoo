import { useState } from "react";

const listOfAnimals = [
  {
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "papkar"
  },
  {
    name: "delfin",
    species: "mamel",
    sector: "sisar"
  },
  {
    name: "koza",
    species: "mamel",
    sector: "papkar"
  },
  {
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "papkar"
  },
  {
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "sisar"
  },
];

const AnimalList = () => {
  //IDE HOOK
  const [animals, setAnimals] = useState(listOfAnimals);

  const [state, setState] = useState({
    name: "",
    species: "",
    date_of_birth: "",
    sector: ""
  });

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };

  const onMoveToTop = (name) => {
    setAnimals((prevState) => 
      prevState = [prevState.filter((animal) => animal.name === name)[0], ...prevState.filter((animal) => animal.name !== name)]
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSector = (sector) => {
    let sectorAnimals = animals.filter((animal) => animal.sector == sector);
    let animalsCombined = "";
    sectorAnimals.forEach(animal => animalsCombined += animal.name + ' ');
    alert(animalsCombined);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.sector);

    let newAnimal = {
      name: state.name,
      species: state.species,
      date_of_birth: state.date_of_birth,
      sector: state.sector
    }
    console.log(state);
    
    setAnimals((prevState) => prevState = [...prevState, newAnimal]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{border: "1px solid black", padding: "5px", borderRadius: "5px"}}>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleInputChange} />
        Species:
        <input type="text" name="species" value={state.species} onChange={handleInputChange} />
        Date:
        <input type="date" name="date_of_birth" value={state.date_of_birth} onChange={handleInputChange} />
        <select name="sector" value={state.sector} onChange={handleInputChange} >
          <option disabled defaultValue>Select sector:</option>
          <option value="sisar">sisar</option>
          <option value="papkar">papkar</option>
          <option value="ptica">ptica</option>
        </select>
        <button type="submit">Add animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.sector}</td>
              <td>{animal.date_of_birth ? animal.date_of_birth : "Nepoznato"}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
              </td>
              <td>
                <button onClick={() => onMoveToTop(animal.name)}>Move To Top</button>
              </td>
              <td>
                <button onClick={() => onSector(animal.sector)}>Show Sector</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;