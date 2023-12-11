import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  SignUpScreen: undefined
  SignInScreen: undefined
  MyTabsScreen: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>
