import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useEffect, useState } from 'react'

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
          <>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick="handleChangeCurrency()" className="btn btn-warning">...</button>
          </>
      </div>
    )
  }
}

BlogPostExcerpt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value})
    }

    render() {
        return (
            <form className="ml-3">
                Username:
                <input type="text" 
                value={this.state.username}
                onChange={this.handleChange}
                />

                <button className="btn btn-primary mt-1" ref={el => (this.button = el)}>Button</button>
            </form>
        )
    }
}

const withColor = Element => props => <Element {...props} color='red' />

const Button = () => {
  return <button className="btn btn-danger">test</button>
}

const ColoredButton = withColor(Button)

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">Hello</h1>
      <ColoredButton />
    </div>
  )
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Flavio', age: 35 }
    this.state = { anime: 'Konosuba', eps: 24 }
  }

  render() {
    return (
      <div>
        <p>Teste</p>
        {this.props.someprop1(this.state.name)}
        {this.props.someprop2(this.state.age)}
        {this.props.someprop3(this.state.anime)}
        {this.props.someprop4(this.state.eps)}
      </div>
    )
  }
}

const Children1 = props => {
  return <p className="text-warning d-flex justify-content-center text-monospace font-weight-bolder">{props.name}</p>
}

const Children2 = props => {
  return <p>{props.age}</p>
}

const Children3 = props => {
  return <h1 className="mb-5">{props.anime}</h1>
}

const Children4 = props => {
  return <p>Episódios: {props.eps}</p>
}

const App2 = () => (
  <Parent
  someprop1={name => <Children1 name={name} />}
  someprop2={age => <Children2 age={age} />}
  someprop3={anime => <Children3 anime={anime} />}
  someprop4={eps => <Children4 eps={eps} />}
  />
)

const Counter = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      <p className="m-3">You clicked {count} times</p>
      <button className="ml-3 btn btn-outline-success" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}



const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Flavio')

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  })

  return(
    <div className="mt-5">
      <p className="mt-5">
        Hi {name} you clicked {count} times
      </p>
      <button className="btn btn-success m-2" onClick={() => setCount(count + 1)}>Click me</button>
      <button className="btn btn-secondary" onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
        Change name
      </button>
    </div>
  )
}

export default App

export {
  Form,
  BlogPostExcerpt,
  App2,
  Counter,
  CounterWithNameAndSideEffect
}