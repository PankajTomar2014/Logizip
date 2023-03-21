import React, { useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {Text} from 'react-native';

const Splash = props => {

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setTimeout(async () => {
      props.navigation.navigate('SignIn');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontWeight:"bold",
        fontSize:35
      }}>{'SPLASH'}</Text>
    </SafeAreaView>
  );
};

export default Splash;
