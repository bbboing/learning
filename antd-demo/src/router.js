import React, { Component } from 'react'
import App from './App'
import Home from './pages/Home'
import Student from './pages/Student'
import { HashRouter as Router, Route} from 'react-router-dom'


export default class router extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/student' component={Student}></Route>
                    </App>
                </Router>
            </div>
        )
    }
}
