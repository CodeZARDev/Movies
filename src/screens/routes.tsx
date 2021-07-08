import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import HomeScreen from "./Home";

const StackNavigator = stackNavigatorFactory();

export const Routes = () => (
  <stackLayout iosIgnoreSafeArea={false} row={1}>
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <StackNavigator.Screen
          name="Home"
          options={{

          }}
          component={HomeScreen}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  </stackLayout>
);
