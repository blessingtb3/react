//our app functional component written in jsx 

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">{/* in html class element, in jsx we define and refer to classes by using className element */}
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
          Code React
        </a>
      </header>
    </div>
  );
}

export default App;
