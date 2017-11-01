import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Head(props) {
  return (
	  	<div className="head">
			<input  placeholder={props.place}/>
			<button > {props.bot} </button>
		</div>
	);
}
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

function Home(props) {

	var placeholder = props.datos.placeholder;
	var boton 		= props.datos.boton;
	var nombre 		= props.datos.nombre;
  return (
  		<div className="container">
			<Head place={placeholder} bot={boton}/>
			<Content nombres={nombre}/>
		</div>
	);
}


// funcion para llamar datos
const data = {
	placeholder:"Escribe tu nombre",
	boton:"Agrega el nombre",
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