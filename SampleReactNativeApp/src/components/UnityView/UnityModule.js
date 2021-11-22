import { NativeModules, DeviceEventEmitter } from 'react-native';
import MessageHandler, { deserialize, isUnityMessage, UnityMessagePrefix } from "./MessageHandler";

const { UnityNativeModule } = NativeModules;


let sequence = 0;
function generateId() {
    sequence = sequence + 1;
    return sequence;
}


function handleMessage(message) {
    if (isUnityMessage(message)) {
        const handler = deserialize(message);
        if (handler.seq === 'end') {
            // handle callback message
            const m = waitCallbackMessageMap[handler.id];
            delete waitCallbackMessageMap[handler.id];
            if (m && m.callBack != null) {
                m.callBack(handler.data);
            }
            return;
        } else {
            return handler;
        }
    } else {
        return message;
    }
}


class UnityModuleClass {
    constructor() {
        this.createListeners();
    }

    createListeners() {
        this.stringListeners = {};
        this.unityMessageListeners = {};
        DeviceEventEmitter.addListener('onUnityMessage', message => {
            const result = handleMessage(message);
            if (result instanceof MessageHandler) {
                Object.values(this.unityMessageListeners).forEach(listener => {
                    listener(result);
                });
            }
            if (typeof result === 'string') {
                Object.values(this.stringListeners).forEach(listener => {
                    listener(result);
                });
            }
        });
    }

    getHandleId() {
        this.hid = this.hid + 1;
        return this.hid;
    }

    async isReady() {
        return UnityNativeModule.isReady();
    }

    async createUnity() {
        return UnityNativeModule.createUnity();
    }

    postMessageToUnityManager(message) {
        if (typeof message === 'string') {
            this.postMessage('UnityMessageManager', 'onMessage', message);
        } else {
            const id = generateId();
            if (message.callBack) {
                waitCallbackMessageMap[id] = message;
            }
            this.postMessage('UnityMessageManager', 'onRNMessage', UnityMessagePrefix + JSON.stringify({
                id: id,
                seq: message.callBack ? 'start' : '',
                name: message.name,
                data: message.data
            }));
        }
    }

    postMessage(gameObject, methodName, message) {
        UnityNativeModule.postMessage(gameObject, methodName, message);
    }
    
    addMessageListener(listener) {
        const id = this.getHandleId();
        this.stringListeners[id] = listener;
        this.unityMessageListeners[id] = listener;
        return id;
    }
}

export const unityModule = new UnityModuleClass();