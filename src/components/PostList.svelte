<script lang="ts">
  import moment from 'moment'
  import type { Post } from "src/types"

  export let posts: Post[] = []

  const parseCreatedAt = (date: number) => moment(date * 1000).from(moment())
</script>

<div class="flex flex-col">
  {#each posts as post}
    <div
      class="
        flex
        flex-col
        mb-2
        p-4
        box-border
        border
        hover:border-gray-300
        hover:cursor-pointer
      ">
      <p class="font-sans text-xs text-gray-500 uppercase font-medium mb-2">{ post.meta.url }</p>
      <p class="font-sans text-md text-gray-700 font-medium mb-1">{ post.meta.title }</p>
      <p class="font-sans text-xs text-gray-400 font-medium">
        { post.meta.author }
        {#if post.created_at}
          - { parseCreatedAt(post.created_at) }
        {/if}
        - { post.comments } comments
    </div>
  {/each}
</div>