  import axios from 'axios'

  const API_BASE_URL = '/api/auth'

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  export const register = async (userData: {
    name: string
    email: string
    password: string
  }) => {
    const response = await api.post('/register', userData)
    return response.data
  }

  export const login = async (credentials: {
    email: string
    password: string
  }) => {
    const response = await api.post('/login', credentials)
    return response.data
  }

  export const logout = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      await api.post(
        '/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    }
  }