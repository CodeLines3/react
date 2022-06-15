import { makeAutoObservable } from 'mobx'

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  id: string | null = null;
  username: string = '';
  role: string | null = null;
  isLogin: boolean = false;
  setUser(user: { username: string, role: string } | null) {
    if (user) {
      const {username, role} = user;
      this.username = username;
      this.role = role;
      this.isLogin = true;
    } else {
      this.username = '';
      this.role = null;
      this.isLogin = false;
    }
  }
}

export default new UserStore();