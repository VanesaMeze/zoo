import { Routes, Route } from "react-router-dom";
import AnimalsDisplay from "./components/AnimalsDisplay";
import AnimalForm from "./components/AnimalForm";
import Welcome from "./pages/Welcome";
import SingleAnimal from "./pages/SingleAnimal";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="animals" element={<AnimalsDisplay />}></Route>
      <Route path="addAnimal" element={<AnimalForm />}></Route>
      <Route
        path="animals/:id"
        element={<SingleAnimal animals={animals} />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
