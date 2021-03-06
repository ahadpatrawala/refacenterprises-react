import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';
import Error from './Error';
import Message from './Message';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/message" component={Message}/>
      <Route path="/error" component={Error}/>        
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
