import { type Post, type ObjById } from './interfaces.js'

export default (unnormalizedData: Post[]): { byId: ObjById, allIds: string[] } => {
  const allIds: string[] = unnormalizedData.map(post => post.id)
  const byId: ObjById = unnormalizedData.reduce((acc, post) => {
    return { ...acc, [post.id]: post }
  }, {})
  return { byId, allIds }
}
