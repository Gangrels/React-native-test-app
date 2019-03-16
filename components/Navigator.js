import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home.js';
import Details from '../screens/Details.js';
import Events from '../screens/Events.js';
import People from '../screens/People.js';
import Cam from '../screens/Camera.js';
import Photo from '../screens/Photo.js';

const bottom = createBottomTabNavigator({

        Events: {
            screen: Events
        },
        People: {
            screen: People
        },
})

const AppNavigation = createStackNavigator(
    {
        Home: {
          screen: Home
        },
        Details: {
            screen: Details
        },
        Cam: {
            screen: Cam
        },
        Photo: {
            screen: Photo
        },
        bottom
    }
)

export default createAppContainer(AppNavigation);