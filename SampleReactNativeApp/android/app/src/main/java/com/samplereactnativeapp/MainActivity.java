package com.samplereactnativeapp;

import android.content.res.Configuration;
import android.graphics.PixelFormat;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.MotionEvent;

import com.facebook.react.ReactActivity;
import com.unity3d.player.UnityPlayer;

public class MainActivity extends ReactActivity {
//  private UnityPlayer mUnityPlayer;
//
//  public UnityPlayer getUnityPlayer() {
//    return null;
//  }

//  @Override
//  protected void onCreate(Bundle savedInstanceState) {
//    super.onCreate(savedInstanceState);

    //getWindow().setFormat(PixelFormat.RGBX_8888); // <--- This makes xperia play happy
//    mUnityPlayer = new UnityPlayer(this);
//  }
//
//  public void onDestroy() {
//    super.onDestroy();
//    mUnityPlayer.quit();
//  }
//
//  public void onResume() {
//    super.onResume();
//    mUnityPlayer.resume();
//  }
//
//  // Low Memory Unity
//  @Override public void onLowMemory()  {
//    super.onLowMemory();
//    mUnityPlayer.lowMemory();
//  }
//
//  // Trim Memory Unity
//  @Override public void onTrimMemory(int level)  {
//    super.onTrimMemory(level);
//    if (level == TRIM_MEMORY_RUNNING_CRITICAL)
//    {
//      mUnityPlayer.lowMemory();
//    }
//  }
//
//  // This ensures the layout will be correct.
//  @Override public void onConfigurationChanged(Configuration newConfig)  {
//    super.onConfigurationChanged(newConfig);
//    mUnityPlayer.configurationChanged(newConfig);
//  }
//
//  // Notify Unity of the focus change.
//  @Override public void onWindowFocusChanged(boolean hasFocus)  {
//    super.onWindowFocusChanged(hasFocus);
//    mUnityPlayer.windowFocusChanged(hasFocus);
//  }
//
//  // For some reason the multiple keyevent type is not supported by the ndk.
//  // Force event injection by overriding dispatchKeyEvent().
//  @Override public boolean dispatchKeyEvent(KeyEvent event)
//  {
//    if (event.getAction() == KeyEvent.ACTION_MULTIPLE)
//      return mUnityPlayer.injectEvent(event);
//    return super.dispatchKeyEvent(event);
//  }
//
//  // Pass any events not handled by (unfocused) views straight to UnityPlayer
//  @Override public boolean onKeyUp(int keyCode, KeyEvent event)     { return mUnityPlayer.injectEvent(event); }
//  @Override public boolean onKeyDown(int keyCode, KeyEvent event)   { return mUnityPlayer.injectEvent(event); }
//  @Override public boolean onTouchEvent(MotionEvent event)          { return mUnityPlayer.injectEvent(event); }
//  /*API12*/ public boolean onGenericMotionEvent(MotionEvent event)  { return mUnityPlayer.injectEvent(event); }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SampleReactNativeApp";
  }
}
