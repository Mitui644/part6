import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (text) => {
    const anecdote = { content: text, votes: 0 }
    const response = await axios.post(baseUrl, anecdote)
    console.log('response: ', response.data)
    return response.data
  }

const exports = { getAll, create }
export default exports