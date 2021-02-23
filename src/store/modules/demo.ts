import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '/@/store'

const NAME = 'demo' // 模块名称
// store.registerModule(NAME)
// registerModule(NAME) // 注册模块
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Demo extends VuexModule {
  private counter = 0

  @Mutation
  commitUpdateCounterState(counter: number): void {
    this.counter = counter
  }

  @Action
  addCounter(counter: number): void {
    this.counter = counter * 2
  }
}

export const demoStore = getModule<Demo>(Demo)
