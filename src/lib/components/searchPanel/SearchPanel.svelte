<script>
  import { goto } from '$app/navigation'
  import { findLocations, locationStore } from '$lib/stores/locations'
  import { onMount } from 'svelte'
  import LocationPicker from './LocationPicker.svelte'
  import CategoryPanel from './CategoryPanel.svelte'
  import CategoryPicker from './CategoryPicker.svelte'

  let searchType = 'service'
  let selectedService
  let location
  let showCategoryPanel

  export let searchDetails

  export let light = true

  onMount(() => {
    // populate the search fields from previous search
    searchType = searchDetails.searchType
    selectedService = searchDetails.service
    location = searchDetails.location

    if (selectedService != '') findLocations(searchType, selectedService)    
  })

  // Populate/Reset list of locations
  const handleSelectSearchType = () => locationStore.set([])
  // const handleSelectservice = () => {
  //   locationStore.set([])
  //   findLocations(searchType, service)
  // }

  const goToPageDetails = () =>
    goto(`/search?&searchType=${searchType}&service=${service}&location=${location}`)
</script>

<form
  on:submit|preventDefault={goToPageDetails}
  class="flex flex-col shadow-xl w-min mx-auto bg-white {light ? 'p-3' : 'p-3 sm:p-8'} rounded"
>
  <!-- {#if !light}
    <div class="mb-4 flex">
      <div on:change={handleSelectSearchType} class="flex items-center mr-4">
        <input
          checked
          id="search-category-1"
          type="radio"
          bind:group={searchType}
          value="service"
          name="search-category"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        />
        <label
          for="search-category-1"
          class="ml-2 text-sm font-medium text-gray-900">Services</label
        >
      </div>
      <div class="flex items-center">
        <input
          id="search-category-2"
          type="radio"
          bind:group={searchType}
          value="facility"
          name="search-category"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        />
        <label
          for="search-category-2"
          class="ml-2 text-sm font-medium text-gray-900"
          >Health Facilities</label
        >
      </div>
    </div>
  {/if} -->
  
  <div class="relative flex flex-col md:flex-row">
    <CategoryPicker bind:showCategoryPanel bind:selectedService />
    <LocationPicker bind:location />
    {#if light}
    <button
    class="bg-orange-500 hover:bg-orange-400 rounded font-semibold text-white w-min ml-8 px-2 py-1"
    type="submit">Search</button>
    {/if}
    <CategoryPanel bind:showCategoryPanel bind:searchType bind:selectedService/>

  </div>
  {#if !light}
  <button
    class="-mb-12 mt-4 mx-auto bg-orange-500 hover:bg-orange-400 rounded font-semibold text-white w-min px-2 py-1"
    type="submit">Search</button
  >{/if}
</form>
