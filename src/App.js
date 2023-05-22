import './App.css';
import AnimalList from './components/AnimalList';
import ButtonClick from './components/ButtonClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimalList />
        <ButtonClick />
      </header>
    </div>
  );
}

export default App;
