import { types, onSnapshot, getRoot } from 'mobx-state-tree';
import { Repo } from '../models/Repo';

export const NavigationStore = types
  .model('NavigationStore', {
    repoDetailScreenParams: types.map(
      types.model('RepoDetailScreenParams', {
        repo: types.maybe(types.safeReference(Repo)),
      })
    ),
  })
  .actions(self => ({
    setRepoDetailsScreenParams(key, params) {
      self.repoDetailScreenParams.set(key, params);
    },
    afterCreate() {
      onSnapshot(self, () => {
        const rootStore = getRoot(self);
        rootStore.save();
      });
    },
  }));
