import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => {
    return {
      answers: [],
      selected: null,
      score: 0,
      quizComplete: false,
      totalQuestions: 0
    }
  },

  actions: {
    initializeArray(val) {
      this.selected = new Array(val)
      this.totalQuestions = val
    },
    checkAnswers() {
      this.score = 0
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === this.selected[i]) {
          this.score++
        }
      }
    },
    quizCompleted() {
      this.quizComplete = true
    }
  }
})
