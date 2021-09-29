import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import  Navbar  from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import FullTime from './components/Fulltime';
import Internship from './components/Internship';
import Applied from './components/Applied';
import ItemScreen from './components/ItemScreen';


function App() {
 


  return (
    <Router>
      <div className="App">
       <Switch>
       <Route  path="/items/:id" component={ItemScreen}/>
       <Route  path="/applied">
            <Header/>
          <Navbar/>
          <Applied/>
          </Route>
          <Route  path="/fulltime">
            <Header/>
            <Navbar/>
            <FullTime/>
          </Route>
          <Route  path="/intern">
            <Header/>
            <Navbar/>
            <Internship/>
          </Route>
          <Route exact path="/">
            <Header/>
          <Navbar/>
          <Main/>
          </Route>
      
           
       
        </Switch>
         
    </div>
    </Router>
    
  );
}

export default App;
