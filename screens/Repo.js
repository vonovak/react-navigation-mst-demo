import NavigationService from '../navigation/NavigationService';
import { Image, ScrollView, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

export const Repo = ({ repo, navigationStore }) => {
  return (
    <View
      css={`
        margin: 10px;
        background: papayawhip;
      `}
    >
      <Text
        onPress={() => {
          NavigationService.navigate('RepoDetailScreen', {
            key: 'RepoDetailScreen',
            params: { repo },
            getNavParamsSetter: navigationStore => navigationStore.setRepoDetailsScreenParams,
          });
        }}
      >
        Repo name: {repo.name}
      </Text>

      <Text
        onPress={() => {
          NavigationService.navigateToUserScreen(repo.owner);
        }}
      >
        Repo owner: {repo.owner.login}
      </Text>
    </View>
  );
};
