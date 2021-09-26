<script lang="ts">
  import store from './store'
  import { onMount } from 'svelte'
  import { getPosts } from './actions'

  import Title from './components/Title.svelte'
  import Input from './components/InputText.svelte'
  import PostList from './components/PostList.svelte'
  import Message from './components/Message.svelte'
  import Button from './components/Button.svelte'

  import type { Post, OrderByOption } from './types'
  
  let query = ''
  let orderBy: OrderByOption = 'Date'

  $: ({ posts, status } = $store)
  $: filteredPosts = filterPosts(query, orderPosts(orderBy, posts))

  const orderByItems: OrderByOption[] = ['Date', 'Comments']

  const filterPosts = (
    query: string,
    posts: Post[]
  ) => posts.filter(post => post.meta.title.toLowerCase().includes(query.toLowerCase()))

  const orderPosts = (
    orderBy: OrderByOption,
    posts: Post[]
  ) => posts.sort((a, b) => {
    switch (orderBy) {
      case 'Date':
        if (!a.created_at) return 0
        return a.created_at - b.created_at
      case 'Comments':
        return b.comments - a.comments
    }
  })

  const handleClickOrderByButton = (orderByOption: OrderByOption) => orderBy = orderByOption

  onMount(() => {
    getPosts()
  })
</script>

<main class="container mx-auto md:px-0 box-border px-2">
  
  <div class="mt-3 mb-2">
    <Title title={`Posts (${ filteredPosts.length })`}/>
  </div>
  <div class="mb-3">
    <Input bind:value={query}/>
  </div>
  <div class="flex mb-3">
    {#each orderByItems as orderByItem}
      <Button
        on:click={() => handleClickOrderByButton(orderByItem)}
        label={orderByItem}
        active={orderBy === orderByItem}
      />
    {/each}
  </div>

  {#if status === 'loading'}
    <Message message="Loading..."/>
  {:else if status === 'error'}
    <Message message="Error."/>
  {:else}
    {#if filteredPosts.length > 0}
      <PostList posts={filteredPosts} />
    {:else}
      <Message message="No posts found."/>
    {/if}
  {/if}
</main>
