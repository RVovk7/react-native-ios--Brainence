import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, Text, View, Image, ScrollView, TouchableHighlight, ImagePickerIOS, AsyncStorage } from 'react-native';
import Head from './Head';
export default class Photo extends Component {
    constructor(props){
        super(props)
        this.state= {
            imageAdd:false,
        }
    }
    imagePicker = () => {
        const { photosList } = this.props.navigation.state.params;
    ImagePickerIOS.openSelectDialog(
            {
                showImages: true
            },
            (imageUri) => {
                photosList.push({
                    albumId: photosList.albumId,
                    id: Date.now(),
                    title: "new photo",
                    url: imageUri,
                    thumbnailUrl: imageUri,
                  })
                  this.setState({imageAdd: !this.state.imageAdd})
            },
            m => console.log(m)
          );
          
    }
    render(){
        const { photosList, styles, logoutClick, albumTitle, navigate } = this.props.navigation.state.params;
        return (
            <Fragment>
                <Head albumTitle={albumTitle} logoutClick={logoutClick} />
                <ScrollView >
                    <View style={styles.albumsContainer} >
                        <TouchableHighlight onPress={this.imagePicker}>
                            <Image
                                style={{ width: 180, height: 180 }}
                                source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png' }}
                            />
                        </TouchableHighlight>
                        {photosList.map(a => <View key={a.id} style={styles.album}>
                            <TouchableHighlight onPress={() => navigate('PhotoScreen', {
                                photo: a.url,
                                photoTitle: a.title,
                                logoutClick: logoutClick
                            })}>
                                <Image
                                    style={{ width: 180, height: 180 }}
                                    source={{ uri: a.thumbnailUrl }}
                                />
                            </TouchableHighlight>
                            <Text style={styles.albumName} >{a.title}</Text>
                        </View>)
                        }
                    </View>
                </ScrollView>
            </Fragment>
        ) 
    }
    
}
Photo.propTypes = {
    photosList: PropTypes.array,
}
AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker)

