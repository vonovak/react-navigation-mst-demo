import { types } from 'mobx-state-tree';
import { User } from './User';

export const Repo = types.model('Repo', {
  id: types.identifier,
  name: types.string,
  full_name: types.string,
  private: types.boolean,
  owner: types.reference(User),
  html_url: types.string,
  description: types.maybeNull(types.string),
  fork: types.boolean,
  url: types.string,
  created_at: types.string,
  updated_at: types.string,
  pushed_at: types.string,
  git_url: types.string,
  ssh_url: types.string,
  clone_url: types.string,
  svn_url: types.string,
  stargazers_count: types.number,
  watchers_count: types.number,
  forks_count: types.number,
  open_issues_count: types.number,
  forks: types.number,
  open_issues: types.number,
  watchers: types.number,
  default_branch: types.string,
});
