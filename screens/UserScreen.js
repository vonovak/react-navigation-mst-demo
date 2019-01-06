import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { inject, observer } from 'mobx-react';
import { MonoText } from '../components/StyledText';
import NavigationService from '../navigation/NavigationService';
import { ScreenWrapper } from './Components';

class _UserScreen extends React.Component {
  static navigationOptions = ({ screenProps }) => {
    const { user } = screenProps.navigationStore.userScreenParams;
    return {
      title: user.login,
    };
  };

  render() {
    const {
      rootStore: { userStore, navigationStore },
    } = this.props;

    const {
      userScreenParams: { user },
    } = navigationStore;

    return (
      <ScreenWrapper>
        <Image
          css={`
            height: 50px;
            width: 50px;
          `}
          source={{ uri: user.avatar_url }}
        />
        <Text>username: {user.login}</Text>
      </ScreenWrapper>
    );
  }
}

export const UserScreen = inject('rootStore')(observer(_UserScreen));
