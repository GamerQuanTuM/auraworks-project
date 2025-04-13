import { supabase } from './supabase'
import { Post } from './types'

interface GetPostsOptions {
  category?: string
  author?: string
  trending?: boolean
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export async function getPosts(options: GetPostsOptions = {}) {
  let query = supabase
    .from('posts')
    .select('*')
  
  // Default sort
  const sortBy = options.sortBy || 'created_at'
  const sortOrder = options.sortOrder || 'desc'
  
  query = query.order(sortBy, { ascending: sortOrder === 'asc' })

  if (options.category) {
    query = query.eq('category', options.category)
  }

  if (options.author) {
    query = query.eq('author', options.author)
  }

  if (options.trending !== undefined) {
    query = query.eq('trending', options.trending)
  }

  if (options.limit) {
    query = query.limit(options.limit)
  }

  const { data, error } = await query

  if (error) {
    throw error
  }

  return data as Post[]
}