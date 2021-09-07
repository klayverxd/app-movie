import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://api.themoviedb.org',
  baseURL: 'https://api.github.com',
  // params: {
  //   api_key: '9396d75fb7c28ee5e1712096b5142a76',
  // },
})

export default api
