import { combineReducers } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import authSlice from './authSlice'
import authSliceTemp from './authSliceTemp'

const rootPersistConfig = {
  key: 'root',
  blacklist: ['authReducerTemp'],
  version: 1,
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  authReducer: authSlice,
  authReducerTemp: authSliceTemp
})

export default persistReducer(rootPersistConfig, rootReducer)
