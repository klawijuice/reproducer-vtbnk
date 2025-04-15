import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation
} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import ApplicationStack, {ApplicationStackParamList} from "./application.tsx";
import MainStack, {MainParamList} from "./main";
import {Appearance, View} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

type RootStackParamList = {
  Welcome: NavigatorScreenParams<ApplicationStackParamList>;
  main: NavigatorScreenParams<MainParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export const navigationRef = createNavigationContainerRef();


const RouteStack = () => {

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={ApplicationStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="main"
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>

    </View>
  );
};

const RootNavigator = () => {
  Appearance.setColorScheme('light');

  return (
      <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef} >
        <RouteStack />
      </NavigationContainer>
      </GestureHandlerRootView>
  );
};

export default RootNavigator;
