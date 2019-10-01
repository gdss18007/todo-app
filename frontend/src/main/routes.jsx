import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'
import Cadastro from '../pages/Cadastro'
import Check from '../pages/checkCPF'
import About from '../about/about'
import login from '../pages/login'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/checkCpf' component={Check}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={login}/>
        <Redirect from='*' to='checkCpf'/>
    </Router>
)