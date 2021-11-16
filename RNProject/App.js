import UnityView from "@asmadsen/react-native-unity-view";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>Hello RN </Text>
         <UnityView />
       
      </View>
    );
  }
}