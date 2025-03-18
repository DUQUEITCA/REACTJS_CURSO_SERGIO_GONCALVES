import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

const tipoMensaje = 'ERROR:';
const contenidoMensaje = <div className='container'>
    <div className='alert alert-danger'>
      <strong>{tipoMensaje}</strong> Este es un mensaje de Error, que debe ser atendido inmediatamente.
    </div>
  </div>;

class AppError extends Component{
  render(){
    return(
        contenidoMensaje
    )
  }
}
export default AppError;
