import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/home2">Home2</Link></li>
        <li><Link to="/home2/home3/a">Home2</Link></li>
        <li><Link to="/home2/otra cosa/dsa">otra cosa</Link></li>
        <li><Link to="/home2/12312/as">1233</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route  path="/home2" component={Home2}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const Home2 = () => (
  <div>
    <h2>CASA</h2>
    <Route  path="/home2/:topicId/:otra" component={Home3}/>
  </div>
)


class Home3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos:{...props.datos},
      value:"",
      opp:""
    };
  }


  render () {
    return (
      <div>
        <h1>{this.props.match.url}</h1>
        <h2>OTRA casa {this.props.match.params.topicId} {this.props.match.params.otra}</h2>
      </div>
    );
  }
}



ReactDOM.render(<BasicExample/>, 
  document.getElementById('root'));