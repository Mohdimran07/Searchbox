
import './App.css';
import InputBox from './components/Input';
import data from './Data.json';

function App() {
  return (
    <div className="App">
     <InputBox data={data} />
    </div>
  );
}

export default App;
