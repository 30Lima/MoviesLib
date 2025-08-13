import { View, StyleSheet, Text } from "react-native"

const MovieDetailsScreen = () => {

    const navigation = useNavigation();
 return(
    <View
        style ={styles.container}
    >
        <Text>MovieListScreen</Text>

    </View>
 )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    
})
