export interface Params {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

export interface Post {
  id: string
  title: string
  body: string
}
export type ObjById = Record<number, Post>

export type UsersList = Array<{ id: number, email: string }>
