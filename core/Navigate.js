import React, {Component, Fragment} from 'react';
import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import Login from './Login';
import Gallery from './Gallery';
import PhotosLists from '../components/PhotosLists';
import Photo from '../components/Photo';

const AppStack = createStackNavigator({GalleryScreen: Gallery, PhotosListsScreen: PhotosLists, PhotoScreen: Photo});
const AuthStack = createStackNavigator({LoginScreen: Login});

const AppNavigate = createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
}, {initialRouteName: 'Auth'});
export default class Navigate extends Component {

    render() {
        return (
            <Fragment>
                <AppNavigate/>
            </Fragment>
        );
    }
}
