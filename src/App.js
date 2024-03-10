import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar/navbar';
import Genres from './components/genres/genres';
import Stations from './components/stations/stations';
import Footer from './components/footer/footer';
import Player from './components/player/player';
function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Genres/>
        <Stations/>
        <Footer/>
        <Player cover="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952" name="No Lie" author="Joe Mama"/>
      </div>
    </div>
  );
}

export default App;
