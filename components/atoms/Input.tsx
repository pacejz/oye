import { TextInput, StyleSheet, View, Text } from "react-native";

export default function Input({ secureTextEntry = false, placeHolder = "", title = "", value, setter }) {
    return (
        <View>
            {
                title
                    ? <Text style={styles.title}>{title}</Text> 
                    : <></>
            }
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeHolder}
                    secureTextEntry={secureTextEntry}
                    onChangeText={newText => setter(newText)}
                    defaultValue={value}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
    inputContainer: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        borderRadius: 30,
        width: 320,
        height: 68,
        padding: 10,
        marginTop: 10
    },
    input: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});