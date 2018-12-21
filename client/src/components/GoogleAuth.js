import React from 'react';
import {signIn, signOut} from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({clientId: '1031692121448-nlnf6q8cp80001kd3uht7il11bu5ajgt.apps.googleusercontent.com',
            scope: 'email'
        }).then(() =>{
            this.auth = window.gapi.auth2.getAuthInstance();
            
            this.onAuthChange(this.auth.isSignedIn.get()) 
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
        });

    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else if (!isSignedIn) {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;

        } else if(this.props.isSignedIn) {
            return (
                <button className="green basic ui google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign-out
                </button>
            )

        } else if(!this.props.isSignedIn){
            return (
                <button className="red basic ui google button"  onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign-in with Google
                </button>
            )
        }
    }
    
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)