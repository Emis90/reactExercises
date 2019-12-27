import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Palindrome from './Palindrome'
import Pagination from './Pagination'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is just a sample website to showcase my skills, click on the links to see some cool stuff!
        </p>

<Router>
         <Switch>
           <Route exact path="/palindrome" component={Palindrome}/>
           <Route exact path="/pagination" component={Pagination}/>
           <div>
           <div>
           <Link to="/palindrome">Palindrome</Link>
           </div>
           <div>
           <Link to='/pagination'>Pagination</Link>
           </div>
           </div>
         </Switch>
</Router>
      </header>
    </div>
  );
}

export default App;
