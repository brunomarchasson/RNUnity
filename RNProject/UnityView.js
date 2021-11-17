import { NativeModules, Button } from 'react-native';
// const {UnityContainerView} = NativeModules;

import { requireNativeComponent } from 'react-native';

const NativeUnityView = requireNativeComponent('UnityView', UnityView);
// requireNativeComponent("UnityView", null);

export class UnityView extends React.Component {
  render() {
    return (
      <View {...props}>
                <NativeUnityView
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    //onUnityMessage={onUnityMessage}
                    //onMessage={onMessage}
                >
                </NativeUnityView>
                {this.props.children}
            </View>
    );
  }
}