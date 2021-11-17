import React from 'react'
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { UnityView } from './components/UnityView/UnityView';

function Home(props) {
  return (
    <View style = {styles.container} >
        <Header />
        <UnityView style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
          <Button title="rr"></Button>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.commandPanel}>

        </View>
        </UnityView>
    </View>
  )
}

Home.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    position: 'absolute',
    //zIndex: 99,
    top: 0, bottom: 0, left: 0, right: 0,
    display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'red',
  },
  commandPanel: {
    backgroundColor: 'red',
    //width: 200,
    height: 200,
    //flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 10
  }
});
export default Home

