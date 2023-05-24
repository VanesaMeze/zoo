const SectorDisplay = ({ animals, sector, onSector }) => {
  return (
    <div
      style={{ border: "1px solid black", borderRadius: "5px", margin: "4px" }}
    >
      <div>{sector}</div>
      <button onClick={() => onSector(sector)}>Select</button>
    </div>
  );
};

export default SectorDisplay;
