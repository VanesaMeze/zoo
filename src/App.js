import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Animals from "./pages/Animals";
import SingleAnimal from "./pages/SingleAnimal";
import AddAnimal from "./pages/AddAnimal";

const animals = [
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

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="animals" element={<Animals animals={animals} />}></Route>
      <Route
        path="animals/:id"
        element={<SingleAnimal animals={animals} />}
      ></Route>
      <Route path="addAnimal" element={<AddAnimal />}></Route>
    </Routes>
  );
}

export default App;
