import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { register as registerApi, login as loginApi, logout as logoutApi } from '@/lib/auth/authService'

export interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  isAuthenticated: false,
}

// Register user async thunk
export const registerUser = createAsyncThunk<
  { user: User; token: string },
  { name: string; email: string; password: string },
  { rejectValue: string }
>('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerApi(userData)
    return response
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Registration failed')
  }
})


// Login user async thunk
export const loginUser = createAsyncThunk<
  { user: User; token: string },
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginApi(credentials)
    return response
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed')
  }
})

// Logout user async thunk
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await logoutApi()
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', action.payload.token)
          localStorage.setItem('user', JSON.stringify(action.payload.user))
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.isAuthenticated = false
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', action.payload.token)
          localStorage.setItem('user', JSON.stringify(action.payload.user))
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.isAuthenticated = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.loading = false
        state.error = null
        state.isAuthenticated = false
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer