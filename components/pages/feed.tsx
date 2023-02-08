import { StyleSheet, View, Text } from 'react-native'

export default function feed() {
    return (
        <View style={styles.container}>
            <Text>
                This is the text of the view
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    }
})