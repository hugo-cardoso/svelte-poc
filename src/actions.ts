import store from './store'
import type { Post } from './types'

type GetPostsResponse = {
  links: Post[],
}

export const getPosts = async () => {
  try {
    const response: GetPostsResponse = await fetch('https://www.mocky.io/v2/5a6bc16631000078341b8b77').then(res => res.json());
    store.update(state => ({
      ...state,
      posts: response.links,
      status: 'ready',
    }))
  } catch (error) {
    store.update(state => ({
      ...state,
      status: 'error',
    }))
  }
}