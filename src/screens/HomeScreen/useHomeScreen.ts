import { useDispatch, useSelector } from 'react-redux'
import { type HomeScreenHook } from './types'
import { type AppDispatch, type RootState } from '../../store'
import { setToken } from '../../store/features/authSliceTemp'

const useHomeScreenHook: HomeScreenHook = () => {
  const dispatch = useDispatch<AppDispatch>()
  const accessToken = useSelector((states: RootState) => states.authReducerTemp.accessToken)

  const handleToken = (): void => {
    dispatch(setToken({
      accessToken: accessToken === null ? Date.now().toString() : null,
      refreshToken: Date.now().toString()
    }))
  }

  return {
    accessToken,
    handleToken
  }
}

export default useHomeScreenHook
