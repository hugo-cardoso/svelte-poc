<script lang="ts">
  export let value = ""
</script>

<input
  class="
    border
    rounded-none
    hover:border-gray-300
    focus:border-gray-300
    outline-none
    box-border
    w-full
    p-2
    font-sans
    text-sm
  "
  bind:value={value}
  type="text"
>