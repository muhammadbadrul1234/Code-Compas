// import './App.css';

//components
import Home from './components/Home';

//context
import DataProvider from './context/DataProvider';

function CraftPen() {
  return (
    <div className="App">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default CraftPen;
