import React from 'react';
import PropTypes from 'prop-types';
const auth = require('./auth')

module.exports = React.createClass({
    getInitialState: function () {
        return {'user': []}
    },

    componentDidMount: function () {
        this.loadUserData()
    },

    contextTypes: {
        router: PropTypes.object.isRequired
    },

    logoutHandler: function () {
        auth.logout()
        this.context.router.replace('/app/login/')
    },

    loadUserData: function () {
        fetch({
            method: 'GET',
            url: '/api/users/i/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            success: function (res) {
                this.setState(res.user)
            }.bind(this)
        })
    },

    render: function () {
        return (
            <div>
                <h1>You are now logged in, {this.state.user.username}</h1>
                <button onClick={this.logoutHandler}>Log out</button>
            </div>
        )
    }
})
