import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import React from 'react'


export default function Button({ label, theme = "white", onPress }) {
    const themes = {
        white: {
            text: "#E9652E",
            background: "#FFF",
        },
        orange: {
            text: "#FFF",
            background: "#E9652E",
        },
    };

    if (theme === "primary") {
        return <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable
                style={[styles.button, { backgroundColor: "#E9652E" }]}
                onPress={onPress}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, { color: "#FFF" }]}>{label.toUppercase()}</Text>
            </Pressable>
        </View>
    } else {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, { backgroundColor: themes[theme].background }]} onPress={onPress}>
                    <Text style={[styles.buttonLabel, { color: themes[theme].text }]}>{label.toUpperCase()}</Text>
                </Pressable>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#E9652E',
        fontSize: 16,
    },
})