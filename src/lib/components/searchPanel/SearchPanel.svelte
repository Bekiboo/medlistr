<script>
  import { goto } from '$app/navigation'
  import { findLocations, listOfLocations } from '$lib/stores/locations'
  import { onMount } from 'svelte'
  import LocationPicker from './LocationPicker.svelte'
  import OptionPicker from './OptionPicker.svelte'

  let category = 'service'
  let option
  let location

  export let searchDetails

  export let light = true

  onMount(() => {
    // populate the search fields from previous search
    category = searchDetails.category
    option = searchDetails.option
    location = searchDetails.location

    if (option != '') findLocations(category, option)    
  })

  // Populate/Reset list of locations
  const handleSelectCategory = () => listOfLocations.set([])
  const handleSelectOption = () => {
    listOfLocations.set([])
    findLocations(category, option)
  }

  const goToPageDetails = () =>
    goto(`/search?&category=${category}&option=${option}&location=${location}`)
</script>

<form
  on:submit|preventDefault={goToPageDetails}
  class="flex flex-col shadow-xl w-min mx-auto bg-white {light ? 'p-3' : 'p-8'} rounded"
>
  {#if !light}
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
          class="ml-2 text-sm font-medium text-gray-900"
          >Health Facilities</label
        >
      </div>
    </div>
  {/if}

  <div class="flex flex-col md:flex-row">
    <OptionPicker bind:option />
    <!-- <label>
      <select
        bind:value={option}
        on:change={handleSelectOption}
        name="type"
        class="bg-slate-100 p-3 rounded-l appearance-none w-full md:w-auto md:min-w-[16rem] cursor-pointer"
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
    </label> -->
    <LocationPicker bind:location />
    {#if light}
    <button
    class="bg-orange-500 hover:bg-orange-400 rounded font-semibold text-white w-min ml-8 px-2 py-1"
    type="submit">Search</button>
    {/if}
  </div>
  {#if !light}
  <button
    class="-mb-12 mt-4 mx-auto bg-orange-500 hover:bg-orange-400 rounded font-semibold text-white w-min px-2 py-1"
    type="submit">Search</button
  >{/if}
</form>

<!-- <label for="default-toggle" class="inline-flex relative cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
  <span class="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
</label> -->

<!-- <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> -->
<!-- Dropdown menu -->
<!-- <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
    <ul class="py-1 text-sm text-gray-70" aria-labelledby="multiLevelDropdownButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
      </li>
      <li>
        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100">Dropdown<svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
          <div id="doubleDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
            <ul class="py-1 text-sm text-gray-70" aria-labelledby="doubleDropdownButton">
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Overview</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">My downloads</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Billing</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Rewards</a>
              </li>
            </ul>
        </div>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Sign out</a>
      </li>
    </ul>
</div> -->