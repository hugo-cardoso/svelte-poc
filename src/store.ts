import { writable } from 'svelte/store'
import type { Post } from './types'

export type Store = {
  posts: Post[];
  status: 'ready' | 'loading' | 'error';
}

export default writable<Store>({
  posts: [],
  status: 'loading',
})
