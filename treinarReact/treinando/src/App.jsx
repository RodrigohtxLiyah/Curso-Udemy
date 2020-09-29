import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './componentes/Home'
import Crud from './componentes/Crud'
import ReactP3 from './componentes/ReactP3'
import {Form, BlogPostExcerpt, App2, Counter, CounterWithNameAndSideEffect} from './componentes/ReactP3'
import React from 'react'
import './App.css'

export default props =>
    <div className="app">
        <Crud />
        <Home />
        <ReactP3 />
        <Form />
        <BlogPostExcerpt />
        <App2 />
        <Counter />
        <CounterWithNameAndSideEffect />
    </div>