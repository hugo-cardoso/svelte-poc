<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let label = ""
  export let active = false

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch('click')
  
</script>

<button 
  class={`
    flex
    box-border
    px-5
    py-2
    text-white
    rounded-none
    border
    font-sans
    text-sm
    mr-2
    border-gray-800
    ${active ? 'bg-gray-800' : 'bg-white'}
    ${active ? 'text-white' : 'text-gray-800'}
  `}
  class:active={active}
  on:click={handleClick}
>{ label }</button>