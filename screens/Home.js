import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import Photo from '../screens/Photo.js';

class Home extends React.Component {
    state = {
        photos: []
     }

    render() {
        const {navigation} = this.props;

        return (
            <View>
                <Text>Home</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to Event/People"
                    onPress={() => this.props.navigation.navigate('bottom')}
                />
                <Button
                    title="Go to Camera"
                    onPress={() => this.props.navigation.navigate('Cam')}
                />
                <View style={styles.photoContainer}>
                    {
                        this.state.photos
                        ?
                            this.state.photos.map(photo => {
                                return <Photo photo={photo}/>
                            })
                        :
                            null
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    photoContainer: {
        marginTop: 20,
    }
})

export default Home;