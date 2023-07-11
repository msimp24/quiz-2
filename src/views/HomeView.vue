<script setup>
import { ref } from 'vue'
import BaseSelect from './../components/BaseSelect.vue'

const categories = ref([
  'General',
  'Entertainment:Books',
  'Entertainment:Film',
  'Entertainment:Music',
  'Entertainment:Musicals & Theatres',
  'Entertainment:TV',
  'Entertainment:Video Games',
  'Entertainment:Boardgames',
  'Science and Nature',
  'Sciece:Computers',
  'Science:Mathematics',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals'
])
const difficulties = ref(['Easy', 'Medium', 'Hard'])

const numbers = ref([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

const apiQuery = ref({
  numOfQuestions: 5,
  difficulty: '',
  category: ''
})
</script>

<template>
  <main>
    <h1 class="is-size-1 has-text-centered mt-5">Choose your quiz</h1>
    <div class="container mt-5">
      <form class="columns is-centered">
        <fieldset>
          <label class="m-5 is-size-5">Select a category</label>
          <select v-model="apiQuery.category" required>
            <option value=""></option>
            <option v-for="(item, index) in categories" :key="index" :value="index + 9">
              {{ item }}
            </option>
          </select>
          <BaseSelect
            :options="difficulties"
            v-model="apiQuery.difficulty"
            label="Select a Difficulty"
          >
          </BaseSelect>
          <BaseSelect
            :options="numbers"
            v-model="apiQuery.numOfQuestions"
            label="Select the length of your quiz"
          >
          </BaseSelect>

          <RouterLink
            :to="{
              name: 'quiz',
              query: {
                numOfQuestions: apiQuery.numOfQuestions,
                category: apiQuery.category,
                difficulty: apiQuery.difficulty
              }
            }"
            class="button button is-primary mt-6"
          >
            Create Quiz
          </RouterLink>
        </fieldset>
      </form>
    </div>
  </main>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
  align-items: center;
}
select {
  width: 15rem;
  height: 3rem;
  text-align: center;
  font-size: 1.25rem;
}
</style>
