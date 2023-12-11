import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type RootBottomTabParamList = {
  HomeScreen: undefined
  SearchAccountScreen: undefined
  CreatePostScreen: undefined
  ProfileScreen: undefined
}

export type RootBottomTabScreenProps<T extends keyof RootBottomTabParamList> = BottomTabScreenProps<RootBottomTabParamList, T>
