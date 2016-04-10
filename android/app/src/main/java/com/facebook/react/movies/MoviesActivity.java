package com.facebook.react.movies;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.brentvatne.react.ReactVideoPackage;
import java.util.Arrays;
import java.util.List;
import javax.annotation.Nullable;

public class MoviesActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "MoviesApp";
  }

  @Override
  protected @Nullable String getBundleAssetName() {
    return "MoviesApp.android.bundle";
  };

  @Override
  protected String getJSMainModuleName() {
    return "MoviesApp.android";
  }

  @Override
  protected boolean getUseDeveloperSupport() {
    return true;
  }

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ReactVideoPackage()
    );
  }
}