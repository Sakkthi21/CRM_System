import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: state => {
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const {login, logout} = authSlice.actions

export const selectToken = state => state.auth.token
export const selectIsAuthenticated = state => state.auth.isAuthenticated

export default authSlice.reducer
