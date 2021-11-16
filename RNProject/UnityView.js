const UnityContainerView = requireNativeComponent("UnityContainerView", null);

class ArPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
      
         <UnityContainerView style={{ flex: 1 }} />
       
      </View>
    );
  }
}