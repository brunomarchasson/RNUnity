import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import UnityView, {MessageHandler, UnityModule} from './components/UnityView';
import Slider from '@react-native-community/slider';

function Home(props) {
  const [lastUnityMessage, setLastUnityMessage] = useState();
  const handleChange = key => value => {
    console.log('send', key, value);
    UnityModule.postMessage('Cube', key, `${value}`);
  };

  const onUnityMessage = hander => {
    console.log('onUnityMessage', hander);
    setLastUnityMessage(JSON.stringify(hander, null, 2));
    // this.setState({ clickCount: this.state.clickCount + 1 });
    setTimeout(() => {
      hander.send('I am click callback!');
    }, 2000);
  };
  const onMessage = message => console.log('onMessage', message);

  console.log('home', lastUnityMessage);
  return (
    <View style={styles.container}>
      <Header />
      <UnityView
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
        onUnityMessage={onUnityMessage}
        onMessage={onMessage}>
        <Button title="rr"></Button>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.commandPanel}>
          <View>
            <Text style={styles.text}>X</Text>
            <Slider
              minimumValue={0}
              step={1}
              maximumValue={10}
              onValueChange={handleChange('setXRotation')}
            />
          </View>

          <View>
            <Text style={styles.text}>Y</Text>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={handleChange('setYRotation')}
            />
          </View>
          <View>
            <Text style={styles.text}>Z</Text>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={handleChange('setZRotation')}
            />
          </View>
          <View style={{height: 300}}>
            <Text style={styles.unityLog}>{lastUnityMessage}</Text>
          </View>
        </View>
      </UnityView>
    </View>
  );
}

Home.propTypes = {};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    position: 'absolute',
    //zIndex: 99,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'red',
  },
  commandPanel: {
    // backgroundColor: 'red',
    //width: 200,
    height: 300,
    //flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  unityLog: {
    height: 150,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 10,
  },
});
export default Home;
