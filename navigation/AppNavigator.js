import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMainTabNavigator } from './MainTabNavigator';

export const createAppNavigator = rootStore => {
  return createAppContainer(createMainTabNavigator(rootStore));
};
