import { View, Text, StyleSheet } from 'react-native';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function RegistrationForm({ navigation, subtitle, buttonLabel, onPressButton, inputFields }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
            </View>
            <View style={styles.bodyContainer}>
                {
                    inputFields.map(({title, value, setter}) => {
                        return  <Input placeHolder='' title={title} value={value} setter={setter} />
                    })
                }
            </View>
            <View style={styles.footerContainer}>
                <Button label={buttonLabel} theme="orange" onPress={onPressButton}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitleContainer: {
        flex: 1,
        // backgroundColor: '#e5e5e5',
        maxWidth: 200
        // fontWeight: "bold"
        
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    logoContainer: {
        // backgroundColor: '#e5e5e5',
        flex: 1/2,
        paddingTop: 40,
    },
    bodyContainer: {
        flex: 1,
        // backgroundColor: '#75e5e5',

    },
    footerContainer: {
        // backgroundColor: '#e5e5e5',
        paddingTop: 40,
        flex: 1/2,
    }
})