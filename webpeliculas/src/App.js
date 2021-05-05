import './App.css'

import { Component } from 'react';
import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import { Switch, Route} from 'react-router-dom'
import {NotFound} from './pages/NotFound'
import { Peliculas } from './pages/Peliculas';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/peliculas' component={Peliculas} />
          <Route component={NotFound} /> 
        </Switch>
      </div>
    );
  } 
}

export default App;
