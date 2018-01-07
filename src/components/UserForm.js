import React, { Component } from 'react'


export default class UserForm extends Component {

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </div>
        )
    }

    handleUserChange = (ev) => this.setState({ username: ev.target.value })

}