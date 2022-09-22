<script>
  import PreloadingIndicator from '$lib/PreloadingIndicator.svelte'
// import { searchResults } from '$lib/supabase'

  export let results = []

  // searchResults.subscribe((curr) => (
  //   results = curr
  //   // console.log(curr)
    // ))
</script>

<div class="flex flex-col w-full">


  <!-- Search Results -->
  {#if results == null}
  <div></div>
  {:else if results[0] == 'loading'}
  <PreloadingIndicator />
    <a
      href="#"
      class="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight">
        <div class="h-4 bg-gray-200 rounded-full w-full mb-4" />
      </h5>
      <div role="status" class="animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full w-full mb-4" />
        <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5" />
        <div class="h-2 bg-gray-200 rounded-full mb-2.5" />
        <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5" />
        <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5" />
        <div class="h-2 bg-gray-200 rounded-full max-w-[360px]" />
        <span class="sr-only">Loading...</span>
      </div>
    </a>
  {:else}
  <!-- Filter -->
  <div class="w-min shadow p-2 rounded-lg bg-white mt-6">
      <div class="flex flex-col md:flex-row gap-2">
        <p class="whitespace-nowrap">Sort By</p>
        <select
          class="px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        >
          <option value="" default>Best Match</option>
          <option value="for-rent">Rating</option>
          <option value="for-sale">Number of Reviews</option>
        </select>
      </div>
  </div>
    <div class="mt-4 flex flex-col">
      {#each results as result}
        <a
          href="/health-facility/{result.id}"
          class="block p-6 max-w-sm md:max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mt-2"
        >
          <h5 class="mb-2 text-xl font-medium tracking-tight">
            {result.name}
          </h5>
          <p>City: {result.location.name}</p>
          <p>Rating: {result.rating}</p>
          <p>
            Review Count: {result.nb_of_reviews > 100
              ? 'HIGH'
              : result.nb_of_reviews > 50
              ? 'MEDIUM'
              : 'LOW'}
          </p>
          <p>Number of Reviews: {result.nb_of_reviews}</p>
        </a>
      {/each}
    </div>
  {/if}
</div>
