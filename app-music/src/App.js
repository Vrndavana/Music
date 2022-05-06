import logo from './logo.png';
import './App.css';


function App() {



  







  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Get them beatz.</p>
        <a className="App-link" href="https://soundcloud.com/l0t1z" target="_blank" rel="noopener noreferrer">
          L0T1Z Productionz
        </a>

        <section>
          <h5>Weekly Pick</h5>
          <div> MrJack <button onclick="play()">Play Audio</button> </div>
        </section>



      </header>
      
    </div>
  );
}

export default App;
