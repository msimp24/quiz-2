import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => {
    return { count: 0 }
  },

  actions: {
    increment() {
      this.count++
    }
  }
})
