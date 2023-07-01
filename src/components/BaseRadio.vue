<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
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
}
</script>
<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
    :id="label"
  />
  <label :for="label" v-if="label">{{ label }}</label>
</template>

<style scoped>
input[type='radio'] {
  display: none;
}
input[type='radio']:checked + label {
  background-color: black;
  color: white;
}
label {
  display: flex;
  margin: 1rem;
  height: 3rem;
  align-items: center;
  padding: 1rem;
  background-color: hsl(196, 78%, 89%);
  cursor: pointer;
  border-radius: 1rem;
  border: 2px solid rgb(111, 189, 231);
}
label:hover {
  filter: brightness(90%);
}
</style>
