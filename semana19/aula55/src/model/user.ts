import { Task } from './task'

export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export type authenticationData = {
  id: string
  role: USER_ROLES
}

export type User = {
  id: string
  name: string
  nickname: string
  email: string
  password: string
  role: USER_ROLES
}

export type UserTasksDTO = {
  id: string
  user: User[]
  tasks: Task[]
}

export type signupInputDTO = {
  name: string
  nickname: string
  email: string
  password: string
  role: string
}

export type loginInputDTO = {
  email: string
  password: string
}

export function convertStringToUserRole(role: string): USER_ROLES {
  switch (role) {
    case 'NORMAL':
      return USER_ROLES.NORMAL
    case 'ADMIN':
      return USER_ROLES.ADMIN
    default:
      throw new Error("O user role precisa ser 'NORMAL' ou 'ADMIN'")
  }
}
