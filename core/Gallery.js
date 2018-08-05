import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getMedia} from '../modules/getMedia';
import Head from '../components/Head';
import Albums from '../components/Albums';
export class Gallery extends Component {
    static propTypes = {
        getMedia: PropTypes.func.isRequired,
        user: PropTypes.string.isRequired,
        ID: PropTypes.number.isRequired,
        albums: PropTypes.array.isRequired,
        photos: PropTypes.array.isRequired,
    }
    logoutClick = () => {
        this
            .props
            .navigation
            .navigate('Auth');
    }
    componentDidMount() {
        const {ID, getMedia} = this.props;
        getMedia(ID);
    }

    render() {
        const {user, albums, photos, navigation} = this.props;
        return (
            <Fragment>
                <Head user={user} logoutClick={this.logoutClick}/>
                <Albums
                    albums={albums}
                    photos={photos}
                    navigate={navigation.navigate}
                    logoutClick={this.logoutClick}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state = []) => {
    return { 
          user: state.authReducer.data.username,
          ID: state.authReducer.data.id,
          albums: state.getMediaReducer.albums,
          photos: state.getMediaReducer.photos,
        };
};

const mapDispatchToProps =  dispatch => ({
    getMedia: id => dispatch(getMedia(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
