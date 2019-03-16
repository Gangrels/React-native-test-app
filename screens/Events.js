import React from 'react';
import { Text, View, SectionList, StyleSheet, Button } from 'react-native';
import EventCard from '../components/EventCard.js';
import fixtures from '../assets/fixtures.js';


class Events extends React.Component {
    state = {
        testEvents: []
      };

    componentDidMount = () => {
        this.setState({testEvents: Object.entries(fixtures.events).map(([key, value]) => ({key, ...value}))})
    }

    render() {
        const {testEvents} = this.state;
        const alphabeticalEvents = {};
        testEvents.forEach(event => {
          const head = event.title.substring(0, 1).toLowerCase();

          const mass = alphabeticalEvents[head] ? alphabeticalEvents[head] : [];

          mass.push(event)
          alphabeticalEvents[head] = mass;
        });

        const structuredEvents = (Object.entries(alphabeticalEvents).sort().map(([key, value]) => ({title:key, data: value})))


        return (
            <View>
                <Text>Events</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <SectionList
                    renderItem={({item, index, section}) =>
                        <EventCard
                        key={index}
                        event={item}
                        deleteEvent={this.deleteEvent}
                        style={styles.eventsContainer}
                        />}
                    sections={structuredEvents}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeaderStyle}> Section {section.title} : {section.data.length} items  </Text>
                    )}
                    keyExtractor={(item, index) => item + index}
                    >
                    <View style={styles.eventsContainer}>
                    {testEvents.map((event, index) =>
                        <EventCard event={event} key={index} deleteEvent={this.deleteEvent}/>
                    )}
                    </View>
                </SectionList>
            </View>
        );
    }

    deleteEvent = (key) => {
        const newState = this.state.testEvents.filter(event => event.key !== key);
        this.setState({testEvents: newState});
    }
}

const styles = StyleSheet.create({
    eventsContainer: {
      borderWidth: 1,
      borderStyle: 'dotted'
    },
    sectionHeaderStyle:{
      backgroundColor : '#CDDC39',
      fontSize : 20,
      padding: 5,
      color: '#fff',
    }
  });

export default Events;