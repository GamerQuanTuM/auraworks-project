export interface Post {
  id: string
  author: string
  location?: string
  category: string
  title: string
  description?: string
  image?: string
  trending: boolean
  created_at: string
  updated_at?: string
}