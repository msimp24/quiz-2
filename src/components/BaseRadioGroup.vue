<script>
import { mapState } from 'pinia'
import BaseRadio from './../components/BaseRadio.vue'
import { useScoreStore } from './../stores/score'
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    BaseRadio
  },
  computed: {
    ...mapState(useScoreStore, ['quizComplete'])
  }
}
</script>

<template>
  <div v-for="option in options" :key="option">
    <BaseRadio
      :key="option.value"
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<style scoped></style>
