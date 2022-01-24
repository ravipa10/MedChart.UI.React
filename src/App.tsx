import * as React from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css'; 
import Index from './Components/index';
import Edit from './Components/EditBloodPressure.Component';
import Create from './Components/CreateBloodPressure.Component';
import Home from './Components/Home.Component';

const App: React.FC = () => {
  return (
    // return <Router />
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <Link to={'/'} className="nav-link">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to={'/create'} className="nav-link">Create</Link>
                          </li>
                          <li className="nav-item">
                              <Link to={'/index'} className="nav-link">Index</Link>
                          </li>
                      </ul>
                  </div>
              </nav> <br/>
         
              <Switch>
                  <Route exact path='/create' component={ Create } />
                  <Route path='/edit/:id' component={ Edit } />
                  <Route path='/index' component={ Index } />
                  <Route path='/' component={ Home } />
              </Switch>
          </div>
      </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Create() {
//   let match:{ 
//     isExact: true
//     params: {
//         id: ''
//     },
//     path: '',
//     url: '',
// }
//   return <Create match={match}/>;
// }

// function Index() {
//   return <h2>Users</h2>;
// }

export default App;