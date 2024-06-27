<script>
  import { clickOutside } from '$lib/helpers/clickOutside'
  import { serviceCategoryStore } from '$lib/stores/serviceCategories'

  export let showCategoryPanel
  export let specialty
  export let searchType
  export let selectedService

  let serviceCategoriesValue

  serviceCategoryStore.subscribe((value) => {
    serviceCategoriesValue = value
  })

  function handleCategory(serviceCategory) {
    selectedService = serviceCategory
    showCategoryPanel = false
  }
</script>

<!-- Dropdown Select Option Menu -->
<div
  use:clickOutside
  on:outclick={() => (showCategoryPanel = false)}
  class="absolute flex w-full overflow-visible bg-white mt-16 border shadow rounded 
       {showCategoryPanel ? 'block' : 'hidden'}"
>
  <div class="basis-1/4">
    {#if searchType == 'service'}
      {#each serviceCategoriesValue as item}
        <div
          class="flex px-4 py-2 cursor-pointer hover:text-orange-500 hover:font-semibold
                hover:bg-orange-50 duration-100
          {specialty == item.specialty ? 'text-orange-500 font-semibold' : ''}"
          on:click={() => (specialty = item.specialty)}
        >
          <!-- <img
            class="h-8 w-8"
            src="icons/specialties/ophthalmology.png"
            alt=""
          /> -->
          {item.specialty}
        </div>
      {/each}
    {:else if searchType == 'facility'}
      <div>Hospitals</div>
      <div>Clinics</div>
      <div>Imaging Centers</div>
      <div>Vision Centers</div>
    {/if}
  </div>

  <div class="basis-3/4 border-l-2 flex flex-col">
    {#if specialty}
      {#each serviceCategoriesValue as item}
        {#if item.specialty == specialty}
          {#each item.serviceCategories as serviceCategory}
            <div
              class="px-4 py-1 cursor-pointer hover:text-orange-500 hover:font-semibold
                   hover:bg-orange-50 duration-100
              {selectedService == serviceCategory
                ? 'text-orange-500 font-semibold'
                : ''}"
              on:click={() => handleCategory(serviceCategory)}
            >
              {serviceCategory}
            </div>
          {/each}
        {/if}
      {/each}
    {/if}
  </div>
</div>
