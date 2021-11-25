import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import LandingPage from './pages/LandingPage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <LandingPage /> */}
        <SearchBar role="Hospital" />
      </header>
    </div>
  );
}

export default App;
