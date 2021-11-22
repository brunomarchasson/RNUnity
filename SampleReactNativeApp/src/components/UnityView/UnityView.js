import * as React from "react";
import { requireNativeComponent, ViewProperties, findNodeHandle, NativeModules, NativeSyntheticEvent, View } from 'react-native';
import * as PropTypes from "prop-types";
const { ViewPropTypes } = require('react-native');
import MessageHandler from "./MessageHandler";
import { unityModule } from "./UnityModule";

const { UIManager } = NativeModules;

export const UnityView = ({children ,onUnityMessage,    onMessage,  ...props} ) =>  {

    React.useEffect(() => {
            const handle = unityModule.addMessageListener(message => {
            console.log('handle')
                    if (onUnityMessage && message instanceof MessageHandler) {
                        onUnityMessage(message);
                    }
                    if (onMessage && typeof message === 'string') {
                        onMessage(message);
                    }
                });
        return () => {
            console.log('unmount')
            if(handle) unityModule.removeMessageListener(handle);
        }
    }, [])
    
      console.log('rr', unityModule, NativeUnityView)
        return (
            <View {...props}>
                <NativeUnityView
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    onUnityMessage={onUnityMessage}
                    onMessage={onMessage}
                >
                </NativeUnityView>
                {children}
            </View>
        );
    // }
}
const NativeUnityView = requireNativeComponent('UnityView', UnityView);
export default UnityView;