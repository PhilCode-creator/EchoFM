import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar/navbar';
import Genres from './components/genres/genres';
import Stations from './components/stations/stations';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Genres/>
        <Stations/>
      </div>
    </div>
  );
}

export default App;
