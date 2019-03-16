import React from 'react';
import { Text, Button, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import fixtures from '../assets/fixtures.js';

class People extends React.Component {
    state = {
        testPeople: []
      };

    componentDidMount = () => {
        this.setState({testPeople: Object.entries(fixtures.people).map(([key, value]) => ({key, ...value}))})
    }

    render() {
        const { testPeople } = this.state;

        return (
            <View>
                <Text>People</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                {
                    <FlatList
                        data={testPeople}
                        renderItem={({item}) => (
                            <View style={styles.peopleContainer}  key={item.key}>
                                <Text>Email: {item.email}</Text>
                                <Text>Firstname: {item.firstName}</Text>
                                <Text>LastName: {item.lastName}</Text>
                            </View>
                          )}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    peopleContainer: {
        borderWidth: 1,
    }
})


export default People;