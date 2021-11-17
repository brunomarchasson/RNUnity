const UnityContainerView = requireNativeComponent("UnityContainerView", null);

export class UnityView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
      
         <UnityContainerView style={{ flex: 1 }} />
       
      </View>
    );
  }
}