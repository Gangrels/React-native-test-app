import React from 'react';
import { Text, Button, View, Image } from 'react-native';

class Photo extends React.Component {

    render() {
        const {uri} = this.props.navigation.state.params;

        return (
            <View>
                <Text>Photo</Text>
                    <Image
                        style={{width: 350, height: 350}}
                        source={{uri: uri}}
                    />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default Photo;