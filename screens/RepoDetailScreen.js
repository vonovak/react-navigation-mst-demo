import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { inject, observer } from 'mobx-react';

class _RepoDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Repo Detail',
  };

  render() {
    const {
      navigation,
      navigation: { state },
      rootStore: { navigationStore },
    } = this.props;
    const { repoDetailScreenParams } = navigationStore;
    const { repo } = repoDetailScreenParams.get(state.key);
    return (
      <ScrollView style={styles.container}>
        <Text
          onPress={() => {
            const rand = Math.floor(Math.random() * 100 + 1);
            const key = `RepoDetailScreen${rand}`;
            navigationStore.setRepoDetailsScreenParams(key, { repo });
            navigation.navigate({ routeName: 'RepoDetailScreen', key });
          }}
        >
          {repo?.name} {state.key}
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
