
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Name(props) {
	return (
			<li >
				{ ((props.id % 2) == 0)?
					<h4>{props.id}-{props.nombre}</h4>:
					<div/>
				}
			</li>
		)
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	date: new Date(),
    	name:"Alfredo",
    	nombres:[
			{id:1,nombre:"fulanito"},
			{id:2,nombre:"jaime"},
		],
		counter:0
    };

    this.handleClick = this.handleClick.bind(this);
    this.addCounter = this.addCounter.bind(this);
    setInterval(()=>this.tick(), 1000);
  }

  tick(){
	  	
	  	this.setState({
	  		date: new Date(),
	  	})
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClick() {
    this.setState(function(prevState){
		var nombres = prevState.nombres;
	  	nombres.push({
	  		id:nombres.length+1,
	  		nombre:"user"+(nombres.length+1),
	  	})
    	var newEdo = {
    		isToggleOn: !prevState.isToggleOn,
    		nombres:nombres
    	}
      return newEdo;
    });
  }

  addCounter(){
  	this.setState(function(prevState){
      return {counter:prevState.counter+1};
    });
  }

  render() {


  	// okioio0lio0li


    return (
      <div>
        <h1>Hola, {this.props.children}</h1>
        
        <h1 onClick={this.addCounter}>
        	Counter: {this.state.counter}
        </h1>
        
        <button onClick={this.handleClick}>
	        {this.state.isToggleOn ? 'ON' : 'OFF'}
	      </button>
        <h1>{this.state.name}</h1>
       	<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {(this.state.counter <8) ? (
		        <ul>
		        	{this.state.nombres.map(function(p) {
						return (
								<Name key={p.id} id={p.id} nombre={p.nombre}/>
							)
					  })}
		        </ul>
        	):<div>
        		NO has llegado a 8
        	</div>}
        
      </div>
    );
  }
}



ReactDOM.render(<div>
	<Clock>
		<span>Alfredo</span>
	</Clock>
</div>, 
	document.getElementById('root'));