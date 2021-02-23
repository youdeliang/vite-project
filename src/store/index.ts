import type { App } from 'vue'
import { createStore } from 'vuex'

import { isDevMode } from '/@/utils/env'
import { config } from 'vuex-module-decorators'

config.rawError = true
const isDev = isDevMode()

const store = createStore({
  // modules: {},
  strict: isDev
  // plugins,
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export default store
