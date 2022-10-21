import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'
import todos from '../src/store/modules/todos'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    todos
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)


app.mount('#app')
