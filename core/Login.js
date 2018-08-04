import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authCheck} from '../modules/auth';
import LoginPage from '../components/LoginPage';
class Login extends Component {
    static propTypes = {
        auth: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.authStatus.auth) {
            this
                .props
                .navigation
                .navigate('GalleryScreen');
            this.setState({logID: ''})
        }
    }

    render() {
        const {auth} = this.props;
        return (<LoginPage auth={auth}/>)
    }
}

const mapStateToProps = (state = []) => {
    return {authStatus: state.authReducer};
};
const mapDispatchToProps = dispatch => ({
    auth: id => dispatch(authCheck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
