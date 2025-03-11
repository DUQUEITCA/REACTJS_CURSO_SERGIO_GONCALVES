import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

const nombre = 'Sergio Goncalves';
const curso = <div className='container'>
    <div className='alert alert-warning'>
      <strong>Atención: </strong> Otra forma de ejecución de componente en el curso de ReactJS {nombre}
    </div>
  </div>;

class App extends Component{
  render(){
    return(
      curso
    )
  }

}

/*
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
      </header>
    </div>
  );
}
*/
export default App;
