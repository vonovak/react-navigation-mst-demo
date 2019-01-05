import { types, onSnapshot, getSnapshot } from 'mobx-state-tree';
import { RepoStore } from './RepoStore';
import { UserStore } from './UserStore';
import { NavigationStore } from './NavigationStore';
import { AsyncStorage } from 'react-native';

export const RootStore = types
  .model('RootStore', {
    identifier: types.optional(types.identifier, 'RootStore'),
    userStore: types.optional(UserStore, () => UserStore.create({ users: {} })),
    repoStore: types.optional(RepoStore, () => RepoStore.create({ repos: [] })),
    navigationStore: types.optional(NavigationStore, () =>
      NavigationStore.create({ repoDetailScreenParams: {} })
    ),
  })
  .actions(self => ({
    async save() {
      try {
        const transformedSnapshot = getSnapshot(self);
        const json = JSON.stringify(transformedSnapshot);

        await AsyncStorage.setItem('appStatePersistenceKey', json);
      } catch (err) {
        console.warn('unexpected error ' + err);
      }
    },
  }));
