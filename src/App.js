import React from 'react';
import './App.css';
import HHeader from './components/header/header';
import Homepage from './pages/homepage/homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesPage from './pages/pages-page/pages-page.component'
import { Switch , Route } from 'react-router-dom';

const App = () => (
  
    <div className='body'>
      <HHeader/>
      <Switch>
        <Route exact path = '/' component = {Homepage} />
        <Route path = '/pages' component={PagesPage}/>
      </Switch>
     
    </div>

);

export default App;
