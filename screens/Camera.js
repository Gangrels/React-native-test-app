import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { Camera, Permissions } from 'expo';

class Cam extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }


    render() {
        const { hasCameraPermission } = this.state;
        if(hasCameraPermission === null) return <View/>;
        if(hasCameraPermission === false) return <Text>No access to camera</Text>;

        return (
            <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }}
                    type={this.state.type}
                    ref={ref => {this.camera = ref}}
                >
                    <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity
                            style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                                });
                            }}
                        >
                            <Text
                                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                {' '}Flip{' '}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            width: 50,
                            height: 50,
                            backgroundColor: '#F00',
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: '#FFF',
                            alignSelf: 'center'
                            }}
                            onPress={this.snap}
                        />
                    </View>
                </Camera>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }


    snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          this.props.navigation.navigate('Photo', photo)
        }
    };
}

export default Cam;

