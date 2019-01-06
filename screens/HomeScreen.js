import React from 'react';
import { TextInput, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import { inject, observer } from 'mobx-react';
import NavigationService from '../navigation/NavigationService';
import { ScreenWrapper, Row } from './Components';
import { Repo } from './Repo';
import { fromPromise, PENDING, REJECTED, FULFILLED } from 'mobx-utils';

class _HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Repo List',
  };

  state = {
    observableFetchPromise: fromPromise.resolve(),
  };

  render() {
    return this.state.observableFetchPromise.case({
      [PENDING]: () => <ActivityIndicator />,
      [REJECTED]: err => <Text>something went wrong</Text>,
      [FULFILLED]: value => this.renderContent(),
    });
  }

  renderContent() {
    const { repoStore } = this.props;
    return (
      <ScreenWrapper>
        <Row
          css={`
            height: 30px;
            align-items: center;
          `}
        >
          <Text>enter github username: </Text>
          <TextInput
            css={`
              width: 200px;
              height: 30px;
              border: 1px solid black;
            `}
            autoCapitalize="none"
            autoCorrect={false}
            value={repoStore.username}
            onSubmitEditing={this.fetchRepos}
            onChangeText={repoStore.setUsername}
          />
        </Row>
        <Button title="fetch repos" onPress={this.fetchRepos} />

        <FlatList
          data={repoStore.repos.slice()}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </ScreenWrapper>
    );
  }

  fetchRepos = () => {
    const { repoStore } = this.props;
    this.setState({
      observableFetchPromise: fromPromise(repoStore.fetchRepos()),
    });
  };

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    const { navigationStore } = this.props;
    const repo = item;
    return <Repo repo={repo} navigationStore={navigationStore} />;
  };
}

export const HomeScreen = inject(({ rootStore: { navigationStore, repoStore } }) => ({
  navigationStore,
  repoStore,
}))(observer(_HomeScreen));
