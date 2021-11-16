package com.unity.mynativeapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import androidx.localbroadcastmanager.content.LocalBroadcastManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.unity3d.player.UnityPlayer
import org.json.JSONException
import org.json.JSONObject

class CommBridge(reactContext : ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    // Unity -> Native (called from CommPlugin using LocalBroadcastManager)
    private val mUnityMessageReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            // Get extra data included in the Intent
            val message = intent.getStringExtra("message")
            val json = deserializeMessage(message, "unity")
            sendToReact(json)
        }
    }
    init {
        //Init LocalBroadcaster listener
        LocalBroadcastManager.getInstance(reactContext).registerReceiver(mUnityMessageReceiver, IntentFilter("FromUnity"))
    }
    // React -> Native (called from React) (Native module call)
    @Suppress("unused")
    @ReactMethod
    fun sendMessage(message: String) {
        val json = deserializeMessage(message, "react")
        sendToUnity(json)
    }
    // Native -> React (called from Java Android)
    private fun sendEvent(reactContext: ReactContext,
                          eventName: String,
                          params: String?) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
    }
    // Native -> React
    private fun sendToReact(message: JSONObject) {
        sendEvent(reactApplicationContext, "Receive", serializeMessage(message))
    }
    // Native -> Unity
    private fun sendToUnity(message: JSONObject) {
        UnityPlayer.UnitySendMessage("messagereceiver", "Receive", serializeMessage(message))
    }
    //Native Module Name
    override fun getName(): String {
        return "CommBridge"
    }
    //JSON Helpers
    private fun deserializeMessage(message: String, origin : String): JSONObject {
        return try {
            val json = JSONObject(message)
            json.put("origin", origin)
            json
        } catch (e : JSONException) {
            e.printStackTrace()
            JSONObject("{name:ParseError}")
        }
    }
    private fun serializeMessage(jsonObject: JSONObject): String {
        return jsonObject.toString()
    }
}