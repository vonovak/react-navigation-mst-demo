import { types } from 'mobx-state-tree';

export const User = types.model('User', {
  id: types.identifier,
  login: types.string,
  avatar_url: types.string,
  gravatar_id: types.string,
  html_url: types.string,
});
