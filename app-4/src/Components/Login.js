import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
          }
          this.handleLogin = this.handleLogin.bind(this)
        }

        updateUser(value) {
            this.setState({username: value})
        }
      
        updatePassword(value) {
            this.setState({password: value})
        }
          
      handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
      }

    render() {
        return (
            <div>
            <input onChange={(e) => this.updateUser(e.target.value)}/>
            <input onChange={(e) => this.updatePassword(e.target.value)}/>
            <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login