import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'
import MyRoute from './pages/MyRoute/MyRoute'
const Login = asyncComponent(()=>import('./pages/login/login'))
const Redit = asyncComponent(()=>import('./pages/redit/redit'))
const Home = asyncComponent(()=>import('./pages/home/home'))
const Detail = asyncComponent(()=>import('./pages/detail/detail'))
const Goods = asyncComponent(()=>import('./pages/goods/goods'))
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/home" component={Home}></Route> */}
        <MyRoute path="/home" component={Home}></MyRoute>
        <MyRoute path="/detail/:id" component={Detail}></MyRoute>
        <MyRoute path="/goods" component={Goods}></MyRoute>
        <Route path="/redit" component={Redit}></Route>
        <Redirect to="/login" ></Redirect>
      </Switch>
     
    </div>
  );
}

export default App;
