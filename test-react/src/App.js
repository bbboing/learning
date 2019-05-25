import React from 'react';
import {BrowserRouter as Router,Route, Link, Redirect, NavLink} from 'react-router-dom';
import A from './components/A.js'
import B from './components/B.js'
import F from './components/F.js'
import Home from './components/Home.js'
import Children from './components/Children.js'
import store from './store.js'
import add from './action'

function App() {
  return (
    <div className="App">
      <div>This is App</div>
      <button onClick={ ()=>{
        console.log("change num");
        //通过store.dispatch()调用action
        store.dispatch(add());
      }}>Click me</button>
      <hr></hr>
      <Router>
          <NavLink exact to='/'>首页</NavLink>
          <NavLink to='/a/5'>A页面</NavLink>
          <NavLink to='/b'>B页面</NavLink>
          <NavLink to='/c'>C页面</NavLink>
          <Link to='/children'>children页面</Link>
          <Link to='/d'>重定向</Link>
          <Route exact path='/' component={Home}></Route>
          <Route path='/a/:id'component={A}></Route>
          <Route path='/b'component={B}></Route>
          <Route path='/c' render={()=>{
            return <h1>render cccc</h1>
          }}></Route>
          <Route path='/children' children={(props)=>{
            let str = props.match?'yes':'no';
            return <Children str={str}></Children>
          }}></Route>
          <Route path='/d' render={() => (
            <Redirect to='/'></Redirect>
          )}></Route>
        <F></F>
      </Router>
    </div>
  );
}

export default App;
