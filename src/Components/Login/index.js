import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios, {loginUrl} from '../../API'
import { signIn } from '../../Store/Modules/LocalSettings/actions'
import {connect} from "react-redux";
import './style.css'

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
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Вхот в кабинет</h5>
                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            <div className="form-label-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                    type="text"
                                    id="inputEmail"
                                    className="form-control"
                                    placeholder="Login"
                                />
                                    <label htmlFor="inputEmail">Логин</label>
                            </div>

                            <div className="form-label-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    name="password"
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                    <label htmlFor="inputPassword">Пароль</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Запомнить</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                Войти
                            </button>
                            <hr className="my-4"/>
                        </form>
                    </div>
                </div>
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