import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const nombre = 'Sergio Goncalves';
const curso = <div className='container'>
    <div className='alert alert-primary'>
      <strong>Atención: </strong> Nombre del estudiante que cursa ReactJS {nombre}
    </div>
  </div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {curso}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
