<script lang="ts">
  import { listOfLocations, loadingLocations } from '$lib/stores/locations'

  let showOptions: boolean = false
  
  export let location: string

  let list: string[] = []

  listOfLocations.subscribe((locations) => (list = locations))
  
  function filterList(value: string, list: string[]) {
    if (value) {
      return list.filter((item) =>
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    } else return list
  }

  $: filteredList = filterList(location, list)

  let loading: boolean
  loadingLocations.subscribe((bool) => (loading = bool))

  const openOptions = () => (showOptions = true)
  const closeOptions = () => setTimeout(closeOptionsForReal, 250) // needed because on:blur will close the dropdown before an item is selected
  const closeOptionsForReal = () => (showOptions = false)
</script>

<label for="default-search" class="sr-only">Search</label>
<div class="relative">
  <div
    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  >
    <svg
      class="w-6 h-6 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      /></svg
    >
  </div>
  <input
    bind:value={location}
    on:focus={openOptions}
    on:blur={closeOptions}
    type="search"
    id="default-search"
    class="bg-slate-100 p-3 rounded-r appearance-none pl-10 md:border-l-2"
    placeholder="Choose a location"
    autocomplete="off"
  />

  <!-- Dropdown Select Location Menu -->
  <div
    class="absolute w-full bg-white mt-2 shadow rounded max-h-60 overflow-y-scroll {showOptions
      ? 'block'
      : 'hidden'}"
  >
    <!-- {#if (list.length = 0)}
      <div class="px-4 py-1">No Result Found</div>
    {/if} -->
    {#if loading}
      <div class="px-4 py-1">Loading...</div>
    {/if}
    {#each filteredList as listItem}
      <div
        on:click={closeOptionsForReal}
        on:click={() => {
          location = listItem
        }}
        class="hover:bg-orange-200 px-4 py-1 cursor-pointer"
      >
        {listItem}
      </div>
    {/each}
  </div>
</div>
