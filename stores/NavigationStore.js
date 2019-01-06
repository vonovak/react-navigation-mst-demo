import { types, onSnapshot, getRoot } from 'mobx-state-tree';
import { Repo } from '../models/Repo';
import { User } from '../models/User';

export const NavigationStore = types
  .model('NavigationStore', {
    repoDetailScreenParams: types.map(
      types.model('RepoDetailScreenParams', {
        repo: types.maybe(types.safeReference(Repo)),
      })
    ),
    userScreenParams: types.model('UserScreenParams', {
      user: types.maybe(types.safeReference(User)),
    }),
  })
  .actions(self => ({
    setRepoDetailsScreenParams(params, key) {
      self.repoDetailScreenParams.set(key, params);
    },
    setUserScreenParams(params, key) {
      self.userScreenParams = params;
    },
    afterCreate() {
      onSnapshot(self, () => {
        const rootStore = getRoot(self);
        rootStore.save();
      });
    },
  }));
