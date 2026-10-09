import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const rootReducer = combineReducers({
  auth: authReducer,
})


export const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['auth/loginUser/fulfilled', 'auth/registerUser/fulfilled'],
          ignoredActionPaths: ['meta.arg', 'payload'],
          ignoredPaths: ['auth.user'],
        },
      }),
  })
}

// Create store with client-side session restoration
const createReduxStore = () => {
  let preloadedState = {}
  
  // Only access localStorage on client-side
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      preloadedState = {
        auth: {
          user: JSON.parse(user),
          token,
          loading: false,
          error: null,
          isAuthenticated: true,
        },
      }
    }
  }
  
  return createStore(preloadedState)
}

export const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch