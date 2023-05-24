import SectorDisplay from "./SectorDisplay";

const SectorsDisplay = ({ animals, animalSectors, onSector }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      Sektori:
      {animalSectors.map((sector, id) => (
        <SectorDisplay
          key={id}
          sector={sector}
          animals={animals}
          onSector={onSector}
        />
      ))}
    </div>
  );
};

export default SectorsDisplay;
