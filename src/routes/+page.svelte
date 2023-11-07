<script lang="ts">
  import Control from "./Control.svelte";

  let show = true
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <Control />
{/if}