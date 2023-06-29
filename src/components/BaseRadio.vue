<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  value: {
    type: String,
    required: true
  }
}
</script>
<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>
