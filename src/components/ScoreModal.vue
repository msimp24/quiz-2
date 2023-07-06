<script setup>
import { useScoreStore } from '../stores/score'
import { useRoute } from 'vue-router'

const scoreboard = useScoreStore()
const route = useRoute()
</script>

<template>
  <div class="container">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="inner-modal" @click.stop>
        <h1 class="title">
          <br />
          Your score is: <br /><br />{{ scoreboard.score }}/{{ route.query.numOfQuestions }}
        </h1>
        <div>
          <button @click="$emit('close-modal')" class="button is-primary m-3">View Results</button>
          <RouterLink to="/" class="button is-primary m-3">New Game</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.inner-modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
}
</style>
