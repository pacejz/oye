import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import Button from '../atoms/Button';

const backgroundImage = require('../../assets/images/background1.jpg');
const appIcon = require('../../assets/images/oye_logo.png');

export default function Pages() {

  const onSignUp = () => {
    alert("Signing up");
  };
  const onLogin = () => {
    alert("Logging up");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.imageContainer}>
        <Image source={appIcon} style={styles.image}></Image>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1/3,
    paddingTop: 40,
  },
  footerContainer: {
    flex: 1 / 3,
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
    flex: 1/2
  },
  subtitle: {
    fontSize: 20,
    color: "#FFF"
  },
  image: {
    width: 100,
    height: 30,
  }
});
