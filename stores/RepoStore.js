import { types, flow, getRoot, onSnapshot } from 'mobx-state-tree';
import { Repo } from '../models/Repo';

export const RepoStore = types
  .model('RepoStore', {
    identifier: types.optional(types.identifier, 'RepoStore'),
    repos: types.array(Repo),
  })
  .actions(self => {
    const setRepos = reposArray => {
      const { userStore } = getRoot(self);

      const repos = reposArray.map(it => {
        const owner = userStore.createOrGetUser(it.owner);
        return Repo.create({ ...it, id: String(it.id), owner });
      });
      self.repos = repos;
    };
    const fetchRepos = flow(function*() {
      const reposJson = yield fetch(`https://api.github.com/users/vonovak/repos`).then(resp =>
        resp.json()
      );
      setRepos(reposJson);
      return reposJson;
    });

    return {
      fetchRepos,
      afterCreate() {
        onSnapshot(self, () => {
          const rootStore = getRoot(self);
          rootStore.save();
        });
      },
    };
  });
