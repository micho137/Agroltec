import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    login(user, password) {
      this.token = 'mi_token_de_prueba'
      this.user = user
    },
    logout() {
      this.token = null
      this.user = null
    },
  },
})
