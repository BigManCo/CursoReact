import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// using ES6 modules
import { Router, Route, Switch } from 'react-router'
 
 
function Content(props) {
  return (
  		<div className="content">
  			<table>
  				<thead>
					<tr>
						<th>Nombre</th>
					</tr>
  				</thead>
  				<tbody>
  				{props.nombres.map((p) =>
					<tr key={p.id}>
						<td>{p.nombre}</td>
					</tr>
				  )}
					
  				</tbody>
			</table>
		</div>
	);
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datos:{...props.datos},
			value:"",
			opp:""
		};
		this.addName = this.addName.bind(this);
    
    	this.handleChange = this.handleChange.bind(this);
    	this.handleChangeOpp = this.handleChangeOpp.bind(this);
	}

	handleChangeOpp(event) {
	    this.setState({opp: event.target.value,value: event.target.value});
	  }

	handleChange(event) {
	    this.setState({value: event.target.value});
	  }


	addName(event){
		event.preventDefault();
		 this.setState(function(prevState){
			var nombres = prevState.datos.nombre;
			nombres.push({
		  		id:nombres.length+1,
		  		nombre:prevState.value,
		  	})
	    	var newEdo = {
	    		nombres:nombres,
	    		value:""
	    	}
	      return newEdo;
	    });
	}

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

	render () {
		var placeholder = this.state.datos.placeholder;
		var boton 		= this.state.datos.boton;
		var nombre 		= this.state.datos.nombre;
		
		return (
			<div className="container">

				<div className="head">
					 <form onSubmit={this.addName}>
						<input onChange={this.handleChange} placeholder={placeholder} value={this.state.value}/>
						<button> {boton} </button>
					</form>
				</div>
				
				<select value={this.state.opp} onChange={this.handleChangeOpp}>
		            <option value="grapefruit">Grapefruit</option>
		            <option value="lime">Lime</option>
		            <option value="coconut">Coconut</option>
		            <option value="mango">Mango</option>
		          </select>

				<Content nombres={nombre}/>
			</div>
		);
	}
}


// funcion para llamar datos
const data = {
	placeholder:"Escribe tu nombre",
	boton:"Agrega el nombre",
	newName:"",
	nombre:[
		{id:1,nombre:"fulanito"},
		{id:2,nombre:"jaime"},
		{id:3,nombre:"pepe"},
		{id:4,nombre:"alan"},
		{id:5,nombre:"marco"},
	],
}



ReactDOM.render(<Home datos={data}/>, 
	document.getElementById('root'));