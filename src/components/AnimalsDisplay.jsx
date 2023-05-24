import AnimalDisplay from "./AnimalDisplay";

const AnimalsDisplay = ({ animals, onRemove, onMoveToTop }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ime zivotinje</th>
          <th>Species</th>
          <th>Vrsta zivotinje</th>
          <th>Datum zivotinje</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          // pozovi hook
          <AnimalDisplay
            key={index}
            animal={animal}
            index={index}
            onRemove={onRemove}
            onMoveToTop={onMoveToTop}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AnimalsDisplay;
