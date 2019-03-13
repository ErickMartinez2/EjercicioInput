import React, { Component } from 'react';
import './App.css';
import Mensaje from './Mensaje';

class MiComponente extends Component {
  constructor(props){
    super(props)
    this.state = { mensajeIn: this.props.variable }

  }
  render() {
    var mundo="Mundo feliz";
    return (
      <div className="App">
        <h1>Ejercicio INPUT</h1>
        <Mensaje msg="amigos"/> 
      </div>
    );
  }
}

export default MiComponente;