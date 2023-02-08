import { StyleSheet, Image } from 'react-native'
const logoOrange = require('../../assets/images/oye_logo_orange.png');
const logoWhite = require('../../assets/images/oye_logo_white.png');
const logo = {
    white: logoWhite,
    orange: logoOrange
};

export default function Logo({color = "orange"}) {

    return (
        <Image source={logo[color]} style={styles.image}></Image>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 30,
    }
});
