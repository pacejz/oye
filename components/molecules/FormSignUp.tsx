import Button from '../atoms/Button';

import { View } from 'react-native';

import {useState} from 'react';

function FormSignUp() {
    const [fulname, setFullName] = useState('');

    function onSignUp() {

    }

    return (
        <View>
            

            <View>
                <Button label="Create account" theme="orange" onPress={onSignUp} />
            </View>
        </View>
    )
}

export default FormSignUp