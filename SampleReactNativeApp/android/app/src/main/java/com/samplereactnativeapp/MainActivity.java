package com.samplereactnativeapp;

import android.content.res.Configuration;
import android.graphics.PixelFormat;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.MotionEvent;
import com.facebook.react.ReactActivity;
import com.unity3d.player.UnityPlayer;

public class MainActivity extends ReactActivity {
  @Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SampleReactNativeApp";
  }
}
