import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios, {loginUrl} from '../../API'
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
            .then(response => this.submitSuccess(response.data["acces_token"], response.data["user"]))
            .catch(error => this.setState({error}))
    }

    submitSuccess = (token, user = {}) => {
        this.props.signIn(token, user);
        this.props.history.push("/");
    }

    render() {

        const { isAuthorized } = this.props

        return(
            isAuthorized
            ? <Redirect to="/" />
            :
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
    state => ({ isAuthorized: state.localSettings.authorizationToken }),
    mapDispatchToProps
)(Login)