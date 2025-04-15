import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, TouchableOpacity, Pressable, Text} from 'react-native';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {DrawerScreenProps} from "@react-navigation/drawer";


export type MainTabsParamList = {
  home: undefined;
  operation: undefined;
  virements: undefined;
  formulaire: undefined;
  plus: undefined;
};

type ProfileScreenProps = CompositeScreenProps<
  DrawerScreenProps<MainTabsParamList>
>;

const Tabs = createBottomTabNavigator<MainTabsParamList>();

const VirementPreviewScreen = () => {
  return null;
};
const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      // ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>ok</Text>
      {/*{children}*/}
    </View>
  </TouchableOpacity>
);

const MainTabs = () => {
  const navigation = useNavigation<any>();


  return (
    <View style={{flex: 1}}>
      <Tabs.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false, // Masquer le titre en haut de la page,
          tabBarActiveTintColor:'blue',
            lazy:false
        }}>
        <Tabs.Screen
          name="home"
          component={Home}
        />

        <Tabs.Screen
          name="operation"
          component={Operation}
        />
                <Tabs.Screen
                  name="virements"
                  component={VirementPreviewScreen}
                  options={{
                    title: '',
                    tabBarIcon: () => <></>,
                    tabBarButton: props => (
                      <CustomTabBarButton {...props} onPress={()=>{}} />
                    ),
                  }}
                />

        <Tabs.Screen
          name="formulaire"
          component={Formulaire}

        />

        <Tabs.Screen
          name="plus"
          component={Plus}
          options={{
            tabBarButton: props => (
              <Pressable {...props} onPress={() => navigation.openDrawer()} />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default MainTabs;
