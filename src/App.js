import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Redit from './pages/redit/redit'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import Goods from './pages/goods/goods'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/goods" component={Goods}></Route>
        <Route path="/redit" component={Redit}></Route>
        <Redirect to="/login" ></Redirect>
      </Switch>
     
    </div>
  );
}

export default App;
