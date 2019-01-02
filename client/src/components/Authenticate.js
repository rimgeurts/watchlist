import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData, login } from '../actions'
import '../styles/components/Authenticate.scss';


class Authenticate extends React.Component {
    
    componentDidMount() {
        if (!this.props.isSignedIn) {
            this.props.login()
        }      
    }

    renderLoginMessage() {

        if (this.props.isSignedIn) {
            const style = {
                color: 'darkgreen'
              };
    
            return ( 
                <div className="account">
                        <button style={style} className="account-login-button"><i className="large material-icons account-icon" onClick={this.handleLogin}>account_box</i></button>
                        <span className="account-text">Connected</span>                   
                </div>
            )
        }

        if (!this.props.isSignedIn) {
            const style = {
                color: 'darkred'
              };
    
            return ( 
                <div className="account">
                        <button style={style} className="account-login-button"><i className="large material-icons account-icon" onClick={this.handleLogin}>account_box</i></button>
                        <span className="account-text">Not Connected!</span>                   
                </div>
            )
        }
    }
    

    render() {
        return (
            <div>
                {this.renderLoginMessage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchData, login })(Authenticate);