import { makeAutoObservable } from 'mobx'

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user: string = 'Sun';
}

export default new UserStore();