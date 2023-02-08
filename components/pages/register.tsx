import RegistrationForm from '../templates/RegistrationForm';
import { signUpEmailPassword } from '../../server/firebase';
import { useState } from "react";

export default function Register({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('hello@hello.com1234');
    const onPressButton = () => {
        if (!name || !email) {
            alert("name and email should be mandatory")
        }
        const result = signUpEmailPassword(email, password);
        console.log(result);
    };
    return <RegistrationForm
        navigation={navigation}
        subtitle="Sign up with email"
        buttonLabel="Create account"
        onPressButton={onPressButton}
        inputFields={[
            {
                title: "Your full name",
                label:"name",
                value: name,
                setter: setName
            },
            {
                title: "Your email",
                label:"email",
                value: email,
                setter: setEmail
            }
        ]}
    />;
}
