const AnimalDisplay = ({ animal, index, onRemove, onMoveToTop }) => {
  return (
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
    </tr>
  );
};

export default AnimalDisplay;
