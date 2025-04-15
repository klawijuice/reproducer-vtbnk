import React, {useEffect} from 'react';

import MainDrawer from "./drawer.tsx";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

export type MainParamList = {
  AcceuilPage: undefined;
};

const Stack = createNativeStackNavigator<MainParamList>();
const LayoutMainStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="AcceuilPage"
          component={MainDrawer}
          options={{
            headerShown: false,
            // title:"ok"
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const MainStack = () => {

  return (
      <LayoutMainStack />
  );
};
export default MainStack;
