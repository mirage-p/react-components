import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import UseStateEx from './hooks/useStateEx';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion></Accordion>
      {/* Random Color Component */}
      <RandomColor></RandomColor>
      {/* useState Hook */}
      <UseStateEx></UseStateEx>
    </div>
  );
}

export default App;
