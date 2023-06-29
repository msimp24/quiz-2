<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import QuizQuestion from '../components/QuizQuestion.vue'

const route = useRoute()
const quizData = ref(null)

const numOfQuestions = ref(route.query.numOfQuestions)
const category = ref(route.query.category)
const difficulty = ref(route.query.difficulty.toLowerCase())

onMounted(() => {
  axios
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

  <div v-for="(item, index) in quizData" :key="index">
    <QuizQuestion
      :correctAnswer="item.correct_answer"
      :incorrectAnswers="item.incorrect_answers"
      :question="item.question"
      :index="index"
    />
  </div>
</template>

<style scoped></style>
