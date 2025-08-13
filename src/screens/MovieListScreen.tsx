import { View, StyleSheet, Text } from "react-native"

const MovieListScreen = () => {
 return(
    <View
        style ={styles.container}
    >
        <Text>MovieListScreen</Text>

    </View>
 )
}

export default MovieListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    
})
