import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authCheck} from '../modules/auth';
import LoginPage from '../components/LoginPage';

class Login extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired
    };

    constructor(props){
        super(props)
        this.state ={
            userNotFound: false
        }
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.authStatus.auth) return { userNotFound: false };
        if (nextProps.authStatus.error) return { userNotFound: true };
    }

    componentDidUpdate(){
        const {authStatus } = this.props;
        if (authStatus.auth) {
            this.props.navigation.navigate('GalleryScreen');
    }  
      }

    render() {
        const { state:{userNotFound}, props:{auth}} = this;
        return (<LoginPage auth={auth} userNotFound={userNotFound}/>)
    }
}

const mapStateToProps = (state = []) => ({
        authStatus: state.authReducer
});

const mapDispatchToProps = dispatch => ({
    auth: id => dispatch(authCheck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
