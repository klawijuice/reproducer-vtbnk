import React from 'react';
import CustomDrawer from './CustomDrawer.tsx';
import MainTabs from './tabs.tsx';
import {createDrawerNavigator} from "@react-navigation/drawer";

type MainTabsParamList = {
  Tabs: typeof MainTabs;
};

const Drawer = createDrawerNavigator<MainTabsParamList>();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false, // Masquer le titre en haut de la page
      }}>
      <Drawer.Screen name="Tabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
