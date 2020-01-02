import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Palindrome from './Palindrome'
import PaginationOne from './PaginationOne'
import Hooks from './Hooks'
import logo from './logo.svg';
import PaginationTwo from './PaginationTwo'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to my React exercises</h3>
        <p>
         This is just a sample website to showcase my skills, click on the links to see some cool stuff!
        </p>

<Router>
         <Switch>
           <Route path='/hooks' component={Hooks}/>
           <Route path="/palindrome" component={Palindrome}/>
           <Route path="/pagination1" component={PaginationOne}/>
           <Route path="/pagination2" component={PaginationTwo}/>
           <div>
           <div>
           <Link to='/hooks'>Hooks</Link>
           </div>
           <div>
           <Link to="/palindrome">Palindrome</Link>
           </div>
           <div>
           <Link to='/pagination1'>PaginationOne</Link>
           </div>
           <div>
           <Link to='/pagination2'>PaginationTwo</Link>
           </div>
           </div>
         </Switch>
</Router>
      </header>
    </div>
  );
}

export default App;
