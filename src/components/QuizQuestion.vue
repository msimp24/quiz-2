<script setup>
import BaseRadioGroup from './BaseRadioGroup.vue'
import { ref, computed } from 'vue'

const question = ref(props.question)
const incorrectAnswers = ref(props.incorrectAnswers)
const correctAnswer = ref(props.correctAnswer)
const selected = ref(null)

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
  <BaseRadioGroup v-model="selected" :name="index" :options="options" />
  {{ question }}

  Selected:{{ selected }}
</template>

<style scoped></style>
