<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import QuizQuestion from '../components/QuizQuestion.vue'
import { useScoreStore } from './../stores/score'

const route = useRoute()
const quizData = ref(null)
const score = useScoreStore()

const toggle = ref(false)
const numOfQuestions = ref(route.query.numOfQuestions)
const category = ref(route.query.category)
const difficulty = ref(route.query.difficulty.toLowerCase())

const toggler = () => {
  toggle.value = !toggle.value
}

onMounted(async () => {
  await axios
    .get(
      `https://opentdb.com/api.php?amount=${numOfQuestions.value}&category=${category.value}&difficulty=${difficulty.value}&type=multiple`
    )
    .then((response) => {
      quizData.value = response.data.results
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1 class="is-size-2 has-text-centered">GOOD LUCK!</h1>

  <div v-for="(item, index) in quizData" :key="index" class="columns is-desktop is-centered">
    <QuizQuestion
      :correctAnswer="item.correct_answer"
      :incorrectAnswers="item.incorrect_answers"
      :question="item.question"
      :index="index"
    />
  </div>
  <button @click="toggler">Check Answers</button>
  <h1 v-if="toggle">You got {{ score.count }}/{{ numOfQuestions }}</h1>
</template>

<style scoped>
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
</style>
