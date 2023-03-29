import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from 'types/navigation';
import * as views from 'views';
import {Colors} from 'config';
import {rem} from 'utils';

const Drawer = createDrawerNavigator<DrawerParamList>();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
  drawerActiveTintColor: 'white',
  drawerInactiveTintColor: 'rgba(255,255,255,0.4)',
  drawerStyle: {
    backgroundColor: Colors.primary,
  },
  drawerItemStyle: {
    backgroundColor: Colors.secondary,
  },
  drawerLabelStyle: {
    fontFamily: 'Inter',
    fontSize: rem(16),
    paddingLeft: rem(8),
  },
};

export const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={screenOptions}>
        <Drawer.Screen name="Home" component={views.HomeScreen} />
        <Drawer.Screen name="History" component={views.HistoryScreen} />
        <Drawer.Screen name="ApiKey" component={views.ApiKeyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
