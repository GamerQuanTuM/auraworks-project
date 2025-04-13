import Posts from '@/components/Posts'
import { getPosts } from '@/lib/posts'
import { Suspense } from 'react'

export default async function Home({
  searchParams,
}: {
  searchParams: any,
}) {
  // Parse sorting parameter
  let sortBy = 'created_at';
  let sortOrder: 'asc' | 'desc' = 'desc';
  
  if (searchParams.sort) {
    if (searchParams.sort === 'oldest') {
      sortOrder = 'asc';
    } else if (searchParams.sort === 'popular') {
      sortBy = 'views';
    }
  }

  // Fetch posts on the server with sorting options
  const posts = await getPosts({
    category: searchParams.category as string | undefined,
    sortBy,
    sortOrder
  })
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts initialPosts={posts} />
    </Suspense>
  )
}