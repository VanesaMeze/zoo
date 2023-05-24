const AnimalId = ({ animals, index }) => {
  let animal = animals[index];

  return (
    <div>
      <div>Animal name: {animal.name}</div>
      <div>Animal species: {animal.species}</div>
      <div>Animal date of birth: {animal.date_of_birth}</div>
      <div>Animal sector: {animal.sector}</div>
    </div>
  );
};

export default AnimalId;
