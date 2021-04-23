export type authenticationData = {
  id: string
}

export type User = {
  id: string
  name: string
  email: string
  password: string
}

export type signupInputDTO = {
  name: string
  email: string
  password: string
}

export type loginInputDTO = {
  email: string
  password: string
}
