import React, {Fragment, Component} from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {Permissions, ImagePicker} from 'expo';
import Head from './Head';
export default class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            localImage: [
                {
                    id: Date.now(),
                    uri: 'default'
                }
            ]
        }
    }
    componentDidMount() {
        this.getStoreData();
    }

    askPermissionsAsync = async() => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
    };

    imagePicker = async() => {
        await this.askPermissionsAsync();
        const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({allowsEditing: true});
        if (!cancelled) {
            this.setStoreData(uri);
        }
    }

    setStoreData = async(uri) => {
        const {albumTitle} = this.props.navigation.state.params;
        const {localImage} = this.state;

        try {
            const newPhoto = localImage.filter(e => e.uri !== 'default');
                newPhoto.push({
                    id: Date.now(),
                    uri
                });

            await AsyncStorage.setItem(albumTitle, JSON.stringify(newPhoto));
            this.getStoreData();
        } catch (error) {
            console.error(error);
        }
    }

    getStoreData = async() => {
        const {albumTitle} = this.props.navigation.state.params;
        try {
            const value = await AsyncStorage.getItem(albumTitle);
            if (value !== null) {
                this.setState({
                    localImage: JSON.parse(value)
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const {photosList, styles, logoutClick, albumTitle, navigate} = this.props.navigation.state.params;
        const {localImage} = this.state;
        return (
            <Fragment>
                <Head albumTitle={albumTitle} logoutClick={logoutClick}/>
                <ScrollView >
                    <View style={styles.albumsContainer}>

                        <TouchableHighlight onPress={this.imagePicker}>
                            <Image
                                style={{
                                width: 180,
                                height: 180
                            }}
                                source={{
                                uri: 'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png'
                            }}/>

                        </TouchableHighlight>
                        {localImage[0].uri !== 'default' && localImage.map(a => <View key={a.id} style={styles.album}>
                            <TouchableHighlight
                                onPress={() => navigate('PhotoScreen', {
                                photo: a.uri,
                                photoTitle: 'new photo',
                                logoutClick: logoutClick
                            })}>
                                <Image
                                    style={{
                                    width: 180,
                                    height: 180
                                }}
                                    source={{
                                    uri: a.uri || 'def'
                                }}/>
                            </TouchableHighlight>

                            <Text style={styles.albumName}>{a.title}</Text>
                        </View>)}
                        {photosList.map(a => <View key={a.id} style={styles.album}>
                            <TouchableHighlight
                                onPress={() => navigate('PhotoScreen', {
                                photo: a.url,
                                photoTitle: a.title,
                                logoutClick: logoutClick
                            })}>
                                <Image
                                    style={{
                                    width: 180,
                                    height: 180
                                }}
                                    source={{
                                    uri: a.thumbnailUrl
                                }}/>
                            </TouchableHighlight>
                            <Text style={styles.albumName}>{a.title}</Text>
                        </View>)
}
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}
