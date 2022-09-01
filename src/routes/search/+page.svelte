<script lang="ts">
import SearchPanel from '$lib/components/searchPanel/SearchPanel.svelte';

  import type { PageData } from './$types'
  import SearchPanelLight from './SearchPanelLight.svelte'

  export let data: PageData

  let searchDetails = data.searchDetails
</script>

<SearchPanel {searchDetails} />

{#each data.results as result}
  <h1>{result.name}</h1><p>{result.location.name}</p><p>---</p>
{/each}
