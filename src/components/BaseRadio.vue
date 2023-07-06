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
  background-color: hsl(171, 100%, 41%);
  border: none;
}
label {
  display: flex;
  margin: 1rem;
  height: 3rem;
  align-items: center;
  padding: 1rem;

  cursor: pointer;
  border-radius: 1rem;
  background-color: white;
  color: black;
  border: 0.15rem solid black;
}
label:hover {
  filter: brightness(90%);
}
</style>
