package com.samplereactnativeapp;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CustomReactPackage implements ReactPackage {
//    @Override
//    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//        return Arrays.<NativeModule>asList(
//                new CommBridge(reactContext) //This will be the subject of the next article.
//        );
//    }

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new CustomUnityViewManager(reactContext)
        );
    }
}
