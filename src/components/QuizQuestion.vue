<script setup>
import BaseRadioGroup from './BaseRadioGroup.vue'
import { ref, computed, watch } from 'vue'
import { useScoreStore } from './../stores/score'

const props = defineProps({
  correctAnswer: {
    type: String,
    required: true
  },
  incorrectAnswers: {
    type: Array,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const question = ref(props.question)
const incorrectAnswers = ref(props.incorrectAnswers)
const correctAnswer = ref(props.correctAnswer)
const selected = ref(null)
const scoreStore = useScoreStore()

watch(() => {
  scoreStore.selected[props.index] = selected.value
})

const options = computed(() => {
  let array = incorrectAnswers

  array.value.push(correctAnswer)
  array.value = array.value.map((str) => ({ value: str, label: str }))
  for (var i = array.value.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array.value[i]
    array.value[i] = array.value[j]
    array.value[j] = temp
  }

  return array.value
})
</script>

<template>
  <div class="column is-half-desktop">
    <h1 class="is-size-5">{{ question }}</h1>

    <BaseRadioGroup v-model="selected" :name="index" :options="options" />

    <div v-if="scoreStore.quizComplete">
      <h1 v-if="correctAnswer === selected" class="title has-text-centered has-text-success">
        Correct
      </h1>
      <h1 v-else class="title has-text-centered has-text-danger">
        Incorrect! The correct answer is: {{ correctAnswer }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.column {
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
