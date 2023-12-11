export type HomeScreenHook = () => {
  accessToken: string | null
  handleToken: () => void
}
