import React, { Component } from 'react';

class Mensaje extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //tipo: "Perro",
            nombre: null
            //genero: "???",
            //edad: "69"
        }
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) =>{
        //alert('INFO MASCOTA -> Nombre: ' + this.state.nombre + ", Genero: " + this.state.genero + ", Edad: " + this.state.edad + ", Tipo: " + this.state.tipo);
        event.preventDefault();
    }
    /*handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }*/
    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {nombre} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*
                    <label>
                        Tipo: <select tipo={this.state.props} onChange={this.handleChange}>
                            <option tipo="Perro">Perro</option>
                            <option tipo="Gato">Gato</option>
                            <option tipo="Conejo">Conejo</option>
                        </select>
                    </label><br />
                    Nombre: <input type = "text" placeholder="" name="nombre" onChange = {this.handleChange}></input> <br />
                    Genero: <input type = "text" placeholder="" name="genero" onChange = {this.handleChange}></input> <br />                    
                    Edad: <input type = "text" placeholder="" name="edad" onChange = {this.handleChange}></input> <br />
                    <input type = "submit" value = "Submit"/>*/}
                    Nombre: <input type = "text" placeholder="Your Name" name="nombre" onChange = {this.handleInputChange}></input> <br />
                    <p>Hola {nombre}</p>
               </form>
            </div>
        )
    }
}


export default Mensaje;