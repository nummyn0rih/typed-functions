import fetch from 'node-fetch'
import { type UsersList } from './interfaces.js'

export default async (url: string): Promise<string> => { // Promise<Array<{ ID: number, Email: string } >>
  let result = ''
  try {
    const response = await fetch(url)
    const data = await response.json() as UsersList
    const log: string = data.reduce((acc, user) => {
      const userInfo = `ID: ${user.id}, Email: ${user.email}`
      return `${acc}\n${userInfo}`
    }, '')
    result = log
  } catch (error) {
    console.error('Error:', error)
  }

  return result
}
