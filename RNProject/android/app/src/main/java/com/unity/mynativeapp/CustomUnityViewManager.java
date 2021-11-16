package com.unity.mynativeapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;
import com.unity3d.player.UnityPlayer;

import java.util.Arrays;
import java.util.List;

public class CustomUnityViewManager extends SimpleViewManager<UnityPlayer> {

    public static final String REACT_CLASS = "UnityContainerView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UnityPlayer createViewInstance(ThemedReactContext reactContext) {
        MainActivity activity = (MainActivity)reactContext.getCurrentActivity();
        return activity.getUnityPlayer();
    }
}

