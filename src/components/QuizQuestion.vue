<script setup>
import BaseRadioGroup from './BaseRadioGroup.vue'
import { ref, computed, watch } from 'vue'

const question = ref(props.question)
const incorrectAnswers = ref(props.incorrectAnswers)
const correctAnswer = ref(props.correctAnswer)
const selected = ref(null)
const isCorrect = ref(0)

watch(() => {
  if (selected.value === correctAnswer.value) {
    isCorrect.value = 1
  }
  if (selected.value !== correctAnswer.value) {
    isCorrect.value = 0
  }
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
</script>

<template>
  <div class="column is-half-desktop">
    <h1 class="is-size-4">{{ question }}</h1>

    <BaseRadioGroup v-model="selected" :name="index" :options="options" />
  </div>
  {{ isCorrect }}
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
