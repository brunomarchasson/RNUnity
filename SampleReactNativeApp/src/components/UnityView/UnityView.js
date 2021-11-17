import * as React from "react";
import { requireNativeComponent, ViewProperties, findNodeHandle, NativeModules, NativeSyntheticEvent, View } from 'react-native';
import * as PropTypes from "prop-types";
const { ViewPropTypes } = require('react-native');
import MessageHandler from "./MessageHandler";
import { UnityModule, UnityViewMessage } from "./UnityModule";

const { UIManager } = NativeModules;

export const UnityView = ({children , ...props} ) =>  {
    
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

    // /**
    //  * [Deprecated] Use `UnityModule.pause` instead.
    //  */
    // public pause() {
    //     UnityModule.pause();
    // };

    // /**
    //  * [Deprecated] Use `UnityModule.resume` instead.
    //  */
    // public resume() {
    //     UnityModule.resume();
    // };

    // /**
    //  * [Deprecated] Use `UnityModule.postMessage` instead.
    //  */
    // public postMessage(gameObject: string, methodName: string, message: string) {
    //     UnityModule.postMessage(gameObject, methodName, message);
    // };

    // /**
    //  * [Deprecated] Use `UnityModule.postMessageToUnityManager` instead.
    //  */
    // public postMessageToUnityManager(message: string | UnityViewMessage) {
    //     UnityModule.postMessageToUnityManager(message);
    // };

    // public render() {
        // const { onUnityMessage, onMessage, ...props } = this.props;

        console.log(NativeUnityView)
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