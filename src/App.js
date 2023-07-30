import './App.css';
import Converter from './Components/Converter';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header />
    <div className="box">
      <h1>Measurement Calculator</h1>
      <Converter />
    </div>
    </>
  );
}

export default App;
