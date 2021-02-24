import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '/@/store'
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper'

const NAME = 'demo' // 模块名称
hotModuleUnregisterModule(NAME)
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Demo extends VuexModule {
  public counter = 0

  @Mutation
  SET_COUNTER(counter: number): void {
    this.counter = counter
  }

  @Action
  addCounter(counter: number): void {
    this.context.commit('SET_COUNTER', counter * 2)
  }
}

export const demoStore = getModule<Demo>(Demo)
