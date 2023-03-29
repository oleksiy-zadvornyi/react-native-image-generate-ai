import React, {FC, useMemo, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import BurgerMenuIcon from 'assets/svg/burger_menu_icon.svg';
import {rem} from 'utils';

import {getStyle} from './styles';

interface HeaderProps {
  label: string;
}

const HeaderComponent: FC<HeaderProps> = memo(({label}) => {
  const navigation = useNavigation();
  const styles = useMemo(() => getStyle(), []);

  const handleDrawerToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDrawerToggle}>
        <BurgerMenuIcon fill="white" width={rem(24)} height={rem(24)} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
});

export default HeaderComponent;
