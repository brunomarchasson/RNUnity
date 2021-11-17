import { NativeModules } from 'react-native';
const { UnityNativeModule } = NativeModules;

export const UnityMessagePrefix = '@UnityMessage@';

export default class MessageHandler {
    deserialize (message) {
        if (!MessageHandler.isUnityMessage(message)) {
            throw new Error(`"${message}" is't an UnityMessage.`);
        }
        message = message.replace(UnityMessagePrefix, '');
        const m = JSON.parse(message);
        const handler = new MessageHandler();
        handler.id = m.id;
        handler.seq = m.seq;
        handler.name = m.name;
        handler.data = m.data;
        return handler;
    }

    isUnityMessage(message) {
        if (message.startsWith(UnityMessagePrefix)) {
            return true;
        } else {
            return false;
        }
    }

    // public id: number;
    // public seq: 'start' | 'end' | '';
    // public name: string;
    // public data: any;

    constructor() {
    }

    send(data) {
        UnityNativeModule.postMessage('UnityMessageManager', 'onRNMessage', UnityMessagePrefix + JSON.stringify({
            id: this.id,
            seq: 'end',
            name: this.name,
            data: data
        }));
    }
}