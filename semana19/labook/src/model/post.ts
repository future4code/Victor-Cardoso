export type POST_TYPES = 'normal' | 'event'

export type Post = {
  id: string
  photo: string
  description: string
  type: POST_TYPES
  createdAt: Date
  authorId: string
}

export type createPostDTO = {
  photo: string
  description: string
  type: POST_TYPES
  createdAt: Date
  authorId: string
}
