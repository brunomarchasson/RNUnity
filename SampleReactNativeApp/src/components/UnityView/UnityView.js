import * as React from "react";
import { requireNativeComponent, ViewProperties, findNodeHandle, NativeModules, NativeSyntheticEvent, View } from 'react-native';
import * as PropTypes from "prop-types";
const { ViewPropTypes } = require('react-native');
import MessageHandler from "./MessageHandler";
import { UnityModule, UnityViewMessage } from "./UnityModule";

const { UIManager } = NativeModules;

export const UnityView = ({children ,onUnityMessage,    onMessage,  ...props} ) =>  {
    const handle = React.useRef;

    React.useEffect(() => {
        handle.current = UnityModule.addMessageListener(message => {
            console.log('handle')
                    if (onUnityMessage && message instanceof MessageHandler) {
                        onUnityMessage(message);
                    }
                    if (onMessage && typeof message === 'string') {
                        onMessage(message);
                    }
                });
        return () => {
            UnityModule.removeMessageListener(this.handle.current);
        }
    }, [])
    // public componentWillMount() {
    //     this.handle = UnityModule.addMessageListener(message => {
    //         if (this.props.onUnityMessage && message instanceof MessageHandler) {
    //             this.props.onUnityMessage(message);
    //         }
    //         if (this.props.onMessage && typeof message === 'string') {
    //             this.props.onMessage(message);
    //         }
    //     });
    // }

    // public componentWillUnmount() {
    //     UnityModule.removeMessageListener(this.handle);
    // }


    // public render() {
        // const { onUnityMessage, onMessage, ...props } = this.props;
      console.log('rr', NativeUnityView)
        return (
            <View {...props}>
                <NativeUnityView
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    // onUnityMessage={onUnityMessage}
                    // onMessage={onMessage}
                >
                </NativeUnityView>
                {children}
            </View>
        );
    // }
}
const NativeUnityView = requireNativeComponent('UnityView', UnityView);
export default UnityView;