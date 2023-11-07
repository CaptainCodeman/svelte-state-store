<script lang="ts">
  import { state } from "svelte-state-store";

  const store = state(0, (set, update) => {
    console.log('started')
    const interval = setInterval(() => update(v => v + 1), 1000)

    return () => {
      console.log('stopped')
      clearInterval(interval)
    }
  })

  let value = store.value

  function refresh() {
    value = store.value
  }
</script>

<p>$store {$store}</p>
<button on:click={() => store.update(value => value = 0)}>Reset</button>

<p>value: {value}</p>
<button on:click={refresh}>Refresh Value</button>
