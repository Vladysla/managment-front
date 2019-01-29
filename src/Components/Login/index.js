import React, { Component } from 'react'

import axios, {dataUrl, loginUrl} from '../../API'
import { signIn } from '../../Store/Modules/LocalSettings/actions'
import {connect} from "react-redux";

class Login extends Component
{
    state = {
        email: "",
        password: "",
        error: null
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const body = {
            email: this.state.email,
            password: this.state.password
        }

        return axios.post(loginUrl, body)
            .then(response => this.props.signIn(response.data["acces_token"], {}))
            .catch(error => this.setState({error}))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="email" placeholder="email" type="text" value={this.state.email} />
                    <input onChange={this.handleChange} name="password" placeholder="password" type="text" value={this.state.password} />
                    <input type="text"/>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: (token, user) => dispatch(signIn(token, user))
})

export default connect(
    null,
    mapDispatchToProps
)(Login)