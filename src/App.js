import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//pages
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper></PageWrapper>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}

export default App;
