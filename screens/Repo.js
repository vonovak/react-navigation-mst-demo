import NavigationService from '../navigation/NavigationService';
import { Image, ScrollView, Text, View, Button, FlatList } from 'react-native';
import React from 'react';
import styled from 'styled-components';
const InfoText = styled(Text)`
  margin: 8px;
`;

export const Repo = ({ repo, navigationStore }) => {
  return (
    <View
      css={`
        margin-vertical: 8px;
        background: lightgrey;
      `}
    >
      <InfoText
        onPress={() => {
          NavigationService.navigate('RepoDetailScreen', {
            key: 'RepoDetailScreen',
            params: { repo },
            getNavParamsSetter: navigationStore => navigationStore.setRepoDetailsScreenParams,
          });
        }}
      >
        Repo name: {repo.name}
      </InfoText>

      <InfoText
        onPress={() => {
          NavigationService.navigateToUserScreen(repo.owner);
        }}
      >
        Repo owner: {repo.owner.login}
      </InfoText>
    </View>
  );
};
