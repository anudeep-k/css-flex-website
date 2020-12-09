import React from 'react'
import { Switch, Route,  } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';

const NavRoute = () => {
    return (
        <>
             <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
            
        </>
    )
}

export default NavRoute
