import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAlbums } from '../modules/getAlbum';
import { getPhoto } from '../modules/getPhoto';
import Head from '../components/Head';
import Albums from '../components/Albums';
export class Gallery extends Component {
  static propTypes = {
    getAlbum: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired,
    user: PropTypes.string,
    ID: PropTypes.number,
    albums: PropTypes.array,
    photos: PropTypes.array,
  }
  logoutClick = () => {
    this.props.navigation.navigate('Auth');
  }
  componentDidMount() {
    const { ID, getAlbum, getPhotos } = this.props;
    getAlbum(ID);
    getPhotos();
  }

  render() {
    const { user, albums, photos, navigation } = this.props;
    return (
      <Fragment>
        <Head user={user} logoutClick={this.logoutClick} />
        <Albums
          albums={albums}
          photos={photos}
          navigate={navigation.navigate} 
          logoutClick={this.logoutClick} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state = []) => {
  return {
    user: state.authReducer.data.username,
    ID: state.authReducer.data.id,
    albums: state.getAlbumReducer.data,
    photos: state.getPhotoReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbum: id => dispatch(getAlbums(id)),
  getPhotos: () => dispatch(getPhoto()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
