<script lang="ts">
  import SearchPanel from '$lib/components/searchPanel/SearchPanel.svelte'
  import SearchResultsPanel from './SearchResultsPanel.svelte'

  import type { PageData } from './$types'

  export let data: PageData

  let searchDetails = data.searchDetails
</script>

<SearchPanel {searchDetails} light={true} />

<SearchResultsPanel results={data.results} />
