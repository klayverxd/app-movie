import axios from 'axios'

import { BASE_URL } from '../shared/constants/api'

import { API_KEY } from '@env'

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

export default api
