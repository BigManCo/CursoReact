import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as firebase from 'firebase';
var config = {
        apiKey: "AIzaSyDQl4Ozt4bBpZRGFoslItCCM6USvLNyVbM",
        authDomain: "pushtest-6548a.firebaseapp.com",
        databaseURL: "https://pushtest-6548a.firebaseio.com",
        projectId: "pushtest-6548a",
        storageBucket: "pushtest-6548a.appspot.com",
        messagingSenderId: "127135923736"
      };
var app = firebase.initializeApp(config);


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...props.data};
	}

	render () {
		var key_menu=0;
		var key_nav=0;
		var key_tabla=0;
		return (
			<div className="container">
				<header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Dashboard</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
          	{this.state.menu.map(function(m) {
          			key_menu++;
				return (
						<li key={key_menu} className="nav-item active">
			              <a className="nav-link" href="#">{m}</a>
			            </li>
					)
			  })}
            
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul className="nav nav-pills flex-column">
          
          </ul>

        </nav>

        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h1>Dashboard</h1>
		{this.state.nav.map(function(m) {
          			key_nav++;
				return (
			             <section key={key_nav} className="row text-center placeholders">
				            <div className="col-6 col-sm-3 placeholder">
				              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
				              <h4>{m}</h4>
				              <div className="text-muted">Something else</div>
				            </div>
				          </section>
					)
			  })}
         

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
              {this.state.tabla.map(function(m) {
          			key_tabla++;
				return (
			            <tr  key={key_tabla}>
		                  <td>{m}</td>
		                  <td>Lorem</td>
		                  <td>ipsum</td>
		                  <td>dolor</td>
		                  <td>sit</td>
		                </tr>
					)
			  })}
                
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
			</div>
		);
	}
}


const data= {
	menu:["Inicio"],
	nav:["uno","dos","tres"],
	tabla:["juan","pepe"]
}



ReactDOM.render(<Home data={data}/>, 
	document.getElementById('root'));