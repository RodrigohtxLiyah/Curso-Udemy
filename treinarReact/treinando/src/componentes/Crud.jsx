import './Crud.css'
import React from 'react'
import axios from 'axios'

const Users = props => (
    <ul>
      {props.users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  )

export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          users: []
        }
      }

    componentDidMount() {
        axios.get('/users').then(users =>
            this.setState({ users: users }))
    }

    render() {
        return <Users users={this.state.users} />
    }
}

