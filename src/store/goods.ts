import { action, makeAutoObservable, observable } from 'mobx'

class HomeStore {
  constructor() {
    makeAutoObservable(this); // 当前页面set可以立即自动get
  }
  num: number = 0;

  setNum(n: number) {
    this.num = n;
  }
}

export default new HomeStore();