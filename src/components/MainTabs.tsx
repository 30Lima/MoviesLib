import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import MovieListScreen from "../screens/MovieListScreen";
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";

//<MaterialIcons name="movie" size={24} color="black" />

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#EB4455",
                tabBarInactiveTintColor: "#999",
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ color,size }) => {
                    let iconName: any;
                    switch (route.name) {
                        case "MovieListScreen":
                            iconName = "movie";
                            break;
                        case "MapScreen":
                            iconName = "map";
                        case "SettingsScreen":
                            iconName = "settings";
                            break;
                        default:
                            iconName = "help";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>;
                }
            })}>

                <Tab.Screen 
                name="MovieListScreen"
                component={MovieListScreen}
                />

                 <Tab.Screen 
                name="MapScreen"
                component={MapScreen}
                />

                 <Tab.Screen 
                name="SettingsScreen"
                component={SettingsScreen}
                />

        </Tab.Navigator>
    )
}