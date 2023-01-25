import {View } from 'react-native'
import Button from '../atoms/Button';

export default function Pages() {

  const onSignUp = () => {
    alert("Signing up");
  };
  const onLogin = () => {
    alert("Logging up");
  };

  return (
    <View>
      <Button label="Sign up" theme="white" onPress={onSignUp}></Button>
      <Button label="Log in" theme="orange" onPress={onLogin}></Button>
    </View>
  )
}

