import React from 'react';
import { Image, ScrollView, Text, View, Button, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react';
import NavigationService from '../navigation/NavigationService';
import { ScreenWrapper } from './Components';
import { Repo } from './Repo';

class _HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Repo List',
  };

  render() {
    const {
      rootStore: { repoStore },
    } = this.props;
    return (
      <ScreenWrapper>
        <Button title="fetch repos" onPress={repoStore.fetchRepos} />

        <FlatList
          data={repoStore.repos}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </ScreenWrapper>
    );
  }
  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    const {
      rootStore: { navigationStore },
    } = this.props;
    const repo = item;
    return <Repo repo={repo} navigationStore={navigationStore} />;
  };
}

export const HomeScreen = inject('rootStore')(observer(_HomeScreen));
