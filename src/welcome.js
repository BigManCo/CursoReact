import React from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
  render() {
    return (
	  	<div>
		  	<h1>Hola, {this.props.name}</h1>
		  	<h3>{this.props.subname}</h3>
		</div>
	  );
  }
}

export default Welcome;