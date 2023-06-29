import axios from 'axios'

const apiClient = axios.create({
  baseUrl: `https://opentdb.com/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getQuizData(numOfQuestions, category, difficulty) {
    return apiClient.get(
      '/api.php?amount=' +
        numOfQuestions +
        '&category=' +
        category +
        '&difficulty=' +
        difficulty +
        '&type=multiple'
    )
  }
}
