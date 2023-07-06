<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import QuizQuestion from '../components/QuizQuestion.vue'
import ScoreModal from './../components/ScoreModal.vue'
import { useScoreStore } from './../stores/score'

const route = useRoute()
const quizData = ref(null)
const scoreboard = useScoreStore()

const toggle = ref(false)
const numOfQuestions = ref(route.query.numOfQuestions)
const category = ref(route.query.category)
const difficulty = ref(route.query.difficulty.toLowerCase())

const showModal = ref(false)

const toggler = () => {
  toggle.value = !toggle.value
}

const toggleModal = () => {
  showModal.value = !showModal.value
}

onMounted(async () => {
  await axios
    .get(
      `https://opentdb.com/api.php?amount=${numOfQuestions.value}&category=${category.value}&difficulty=${difficulty.value}&type=multiple`
    )
    .then((response) => {
      quizData.value = response.data.results
      scoreboard.numOfQuestions = numOfQuestions.value
      scoreboard.initializeArray(numOfQuestions.value)
      scoreboard.quizComplete = false
      scoreboard.score = 0
      for (let i = 0; i < numOfQuestions.value; i++) {
        scoreboard.answers[i] = quizData.value[i].correct_answer
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <ScoreModal v-show="showModal" @close-modal="showModal = false" />
  <div v-for="(item, index) in quizData" :key="index" class="columns is-desktop is-centered">
    <QuizQuestion
      :class="{ events: scoreboard.quizComplete }"
      :correctAnswer="item.correct_answer"
      :incorrectAnswers="item.incorrect_answers"
      :question="item.question"
      :index="index"
    />
  </div>
  <div class="has-text-centered">
    <button
      v-if="quizData"
      class="button is-primary m-4"
      @click="scoreboard.checkAnswers(), toggler(), scoreboard.quizCompleted(), toggleModal()"
      :class="{ toggle: toggle }"
    >
      Check Answers
    </button>

    <button
      v-if="quizData"
      class="button is-primary m-4"
      :class="{ toggle: showModal }"
      @click="toggleModal()"
    >
      Menu
    </button>
  </div>
</template>

<style scoped>
.events {
  pointer-events: none;
}
.toggle {
  display: none;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: red;
}
.columns {
  margin: 2rem;
}
button {
  background-color: var(--primary);
}
</style>
