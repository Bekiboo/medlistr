<script>
  import SearchPanel from '$lib/components/searchPanel/SearchPanel.svelte'
  import SearchResultsPanel from './SearchResultsPanel.svelte'

  export let data

  let searchDetails = data.searchDetails
</script>

<SearchPanel {searchDetails} light={true} />

<SearchResultsPanel results={data.results} />
