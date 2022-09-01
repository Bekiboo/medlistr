<script lang="ts">
  import { goto } from '$app/navigation'
  import { findLocations, listOfLocations } from '$lib/stores/locations'
  import { onMount } from 'svelte'
  import LocationPicker from './LocationPicker.svelte'

  let category = 'service'
  let option: string
  let location: string

  export let searchDetails: any

  onMount(() => {
    category = searchDetails.category
    option = searchDetails.option
    location = searchDetails.location
  })

  const handleSelectCategory = () => listOfLocations.set([])
  const handleSelectOption = () => {
    listOfLocations.set([])
    findLocations(category, option)
  }

  const goToPage = () =>
    goto(`/search?&category=${category}&option=${option}&location=${location}`)
</script>

<form
  on:submit|preventDefault={goToPage}
  class="flex flex-col shadow-xl w-min mx-auto bg-white p-8 rounded"
>
  <div class="mb-4 flex">
    <div on:change={handleSelectCategory} class="flex items-center mr-4">
      <input
        checked
        id="search-category-1"
        type="radio"
        bind:group={category}
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
        bind:group={category}
        value="facility"
        name="search-category"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="search-category-2"
        class="ml-2 text-sm font-medium text-gray-900">Health Facilities</label
      >
    </div>
  </div>

  <div class="flex flex-col md:flex-row">
    <label>
      <select
        bind:value={option}
        on:change={handleSelectOption}
        name="type"
        class="bg-slate-100 p-3 rounded-l appearance-none w-full md:w-auto mb-2 md:mb-2 md:min-w-[16rem]"
        required
      >
        {#if category == 'service'}
          <option value="">Choose a Service &#9662;</option>
          <option value="Eye Exam">Eye Exams</option>
          <option value="LASIK">LASIK</option>
          <option value="Cataract Surgery">Cataract Surgeries</option>
          <option value="Leg Joint MRI">Leg Joint MRIs</option>
          <option value="Leg MRI">Leg MRIs</option>
        {:else if category == 'facility'}
          <option value="">Choose a Health Facility &#9662;</option>
          <option value="Hospital">Hospitals</option>
          <option value="Clinic">Clinics</option>
          <option value="Imaging Center">Imaging Centers</option>
          <option value="Vision Center">Vision Centers</option>
        {/if}
      </select>
    </label>
    <LocationPicker bind:location />
  </div>
  <button
    class="-mb-12 mt-4 mx-auto bg-orange-500 hover:bg-orange-400 rounded text-white w-min px-2 py-1"
    type="submit">Search</button
  >
</form>

<!-- <label for="default-toggle" class="inline-flex relative cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
  <span class="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
</label> -->
