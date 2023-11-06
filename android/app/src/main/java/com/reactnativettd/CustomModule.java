package com.reactnativettd;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CustomModule extends ReactContextBaseJavaModule {
    public CustomModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CustomModule";
    }


    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("Custom Module", "Create event called with name: " + name
                + " and location: " + location);
    }
}
