<script lang="ts">
  let input: string

  let list: string[] = []

  function filterList(value: string) {
    if (value) {
      return list.filter((item) =>
        item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    } else return list
  }

  $: filteredList = filterList(input)

  function populateList() {
    list = [
      'prout',
      'Ohio',
      'Salt Lake City',
      'Orem',
      'Provo',
      'Tintin au Tibet',
    ]
  }
</script>

<input bind:value={input} type="text" />

{#each filteredList as item}
  <div>{item}</div>
{/each}
<br />
<button on:click={populateList}>Populate list</button>
