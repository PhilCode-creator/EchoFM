import './App.css';

import Navbar from './components/navbar/navbar';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
