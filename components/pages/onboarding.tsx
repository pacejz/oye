import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';

const backgroundImage = require('../../assets/images/background1.jpg');
const appIcon = require('../../assets/images/oye_logo_white.png');

export default function Onboarding({navigation}) {

  const onSignUp = () => {
    navigation.navigate('register')
  };
  const onLogin = () => {
    navigation.navigate('signin')
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.logoContainer}>
        <Logo color="white" />
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Connect with your neighbours</Text>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Sign up" theme="white" onPress={onSignUp}></Button>
        <Button label="Log in" theme="orange" onPress={onLogin}></Button>
      </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    paddingTop: 40,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitleContainer: {
    paddingTop: 120,
    flex: 1
  },
  subtitle: {
    fontSize: 20,
    color: "#FFF"
  }
});
