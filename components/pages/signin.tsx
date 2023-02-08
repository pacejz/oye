import { View, Text, StyleSheet } from 'react-native';
import Logo from '../atoms/Logo';
import RegistrationForm from '../templates/RegistrationForm';
import { useState } from 'react';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPressButton = () => {
        console.log("TODO");
    };
    return <RegistrationForm
        navigation={navigation}
        subtitle="Log in with email"
        buttonLabel="Continue"
        onPressButton={onPressButton}
        inputFields={[
            {
                title: "Your email",
                label:"email",
                value: email,
                setter: setEmail
            },
            {
                title: "Your password",
                label:"password",
                value: password,
                setter: setPassword
            }
        ]}
    />;
}
