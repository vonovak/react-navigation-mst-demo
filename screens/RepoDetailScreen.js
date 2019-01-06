import React from 'react';
import { Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { inject, observer } from 'mobx-react';
import NavigationService from '../navigation/NavigationService';
import { ScreenWrapper } from './Components';

class _RepoDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Repo Detail',
  };

  render() {
    const {
      navigation: { state },
      rootStore: { navigationStore, repoStore },
    } = this.props;
    const { repoDetailScreenParams } = navigationStore;
    const { repo } = repoDetailScreenParams.get(state.key);

    const randomRepo = repoStore.getRandomRepo();
    return (
      <ScreenWrapper
        css={`
          margin: 10px;
        `}
      >
        <Text
          css={`
            font-weight: bold;
          `}
        >
          repo name: {repo.name}
        </Text>
        <Text>navigation key is: {state.key}</Text>

        <Text
          onPress={() => {
            NavigationService.navigateToUserScreen(repo.owner);
          }}
        >
          repo owner is: {repo.owner.login} (tap me)
        </Text>

        <Button
          title="go to a random repo"
          css={`
            margin-top: 15px;
          `}
          onPress={() => {
            const key = `RepoDetailScreen${NavigationService.generateUid()}`;

            // this will push new screens on the stack thanks to the unique key
            NavigationService.navigate('RepoDetailScreen', {
              key,
              params: { repo: randomRepo },
              getNavParamsSetter: navigationStore => navigationStore.setRepoDetailsScreenParams,
            });
          }}
        />
      </ScreenWrapper>
    );
  }
}

export const RepoDetailScreen = inject('rootStore')(observer(_RepoDetailScreen));
