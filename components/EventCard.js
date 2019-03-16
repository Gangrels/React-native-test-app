import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform } from 'react-native';

class EventCard extends React.Component {
    state = {
        modalVisible: false,
     }

    render() {
        const {event} = this.props
        const {modalVisible} = this.state

        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View>
                        <Text>Title: {event.title}</Text>
                        <Text>Url: {event.url}</Text>
                        <Text>When: {event.when}</Text>

                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.changeModalVisibility}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <Modal
                        animationType='fade'
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                            console.log('Modal has been closed.');
                        }}
                    >
                        <View style={styles.modal}>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={this.deleteCurrentEvent(event.key)}
                            >
                                <Text>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={this.changeModalVisibility}
                            >
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
            </View>
        );
    }

    changeModalVisibility = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    deleteCurrentEvent = (key) => () => {
        this.props.deleteEvent(key);
        this.setState({modalVisible: !this.state.modalVisible});
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    button: {
        marginLeft: 20,
        padding: 10,
        width: 100,
        color: "#841584",
        backgroundColor: '#bada55',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowOffset:{  width: 10,  height: 10,  },
                shadowColor: 'black',
                shadowOpacity: 1.0,
            },
            android: {
                elevation: 5,
            }
        })
    },
    modal: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        marginLeft: 20,
        padding: 10,
        width: 150,
        color: "#841584",
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButton: {
        marginLeft: 20,
        padding: 10,
        width: 150,
        color: "#841584",
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default EventCard;