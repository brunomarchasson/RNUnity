import { UnityView } from "./UnityView";

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