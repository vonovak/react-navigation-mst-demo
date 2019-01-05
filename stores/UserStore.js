import { types } from 'mobx-state-tree';
import { User } from '../models/User';

export const UserStore = types
  .model('UserStore', {
    identifier: types.optional(types.identifier, 'UserStore'),
    users: types.map(User),
  })
  .actions(self => ({
    createUser(userJson) {
      const user = User.create({ ...userJson, id: String(userJson.id) });
      self.users.set(user.id, user);
      return user;
    },
    createOrGetUser(userJson) {
      const existingUser = self.users.get(String(userJson.id));
      return existingUser ? existingUser : self.createUser(userJson);
    },
  }));
