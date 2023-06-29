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
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <label class="m-5 is-size-5" v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="select"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
<style scoped>
select {
  width: 15rem;
  text-align: center;
  font-size: 1.25rem;
}
</style>
