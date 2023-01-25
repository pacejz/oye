import { StyleSheet, Image } from "react-native";

import React from 'react'

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage !== null
        ? {uri: selectedImage} :
        placeholderImageSource;
    return (
        <Image source={imageSource} style={styles.image}></Image>
    )
}

const styles = {
    image: {
        width: 320,
        height: 440, 
        borderRadius: 18,
    }
};
