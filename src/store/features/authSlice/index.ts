import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IAuthSliceStates } from './types'

const initialState: IAuthSliceStates = {
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken (state, action: PayloadAction<IAuthSliceStates>) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    }
  }
})

export const { setToken } = authSlice.actions
export default authSlice.reducer
