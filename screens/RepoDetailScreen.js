import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { inject, observer } from 'mobx-react';
import NavigationService from '../navigation/NavigationService';

class _RepoDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Repo Detail',
  };

  render() {
    const {
      navigation: { state },
      rootStore: { navigationStore },
    } = this.props;
    const { repoDetailScreenParams } = navigationStore;
    const { repo } = repoDetailScreenParams.get(state.key);
    return (
      <ScrollView style={styles.container}>
        <Text
          onPress={() => {
            const key = `RepoDetailScreen${NavigationService.generateUid()}`;

            // this will push new screens on the stack thanks to unique key
            NavigationService.navigate('RepoDetailScreen', {
              key,
              params: { repo },
              getNavParamsSetter: navigationStore => navigationStore.setRepoDetailsScreenParams,
            });
          }}
        >
          {repo?.name} {state.key}
        </Text>

        <Text
          onPress={() => {
            NavigationService.navigateToUserScreen(repo.owner);
          }}
        >
          {repo.owner.login}
        </Text>
      </ScrollView>
    );
  }
}

export const RepoDetailScreen = inject('rootStore')(observer(_RepoDetailScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
