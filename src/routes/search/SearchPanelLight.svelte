<script lang="ts">
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  let category = 'service'
  let option: string
  let area: string

  export let searchDetails: any

  onMount(() => {
    category = searchDetails.category
    option = searchDetails.option
    area = searchDetails.area
  })

  const submit = () => {
    goto(`/search?&category=${category}&option=${option}&area=${area}`)
  }
</script>

<form
  on:submit|preventDefault={submit}
  class="flex flex-col shadow-xl w-min mx-auto bg-white p-8"
>
  <h2>{category}</h2>
  <div class="flex flex-col md:flex-row">
    <label>
      <select
        bind:value={option}
        name="type"
        class="bg-slate-100 p-3 rounded-l appearance-none w-full md:w-auto mb-2 md:mb-2 md:min-w-[16rem]"
        required
      >
        {#if category == 'service'}
          <option value="">Choose a Service &#9662;</option>
          <option value="eyeExams">Eye Exams</option>
          <option value="LASIK">LASIK</option>
          <option value="cataractSurgeries">Cataract Surgeries</option>
          <option value="legJointMRIs">Leg Joint MRIs</option>
          <option value="legMRIs">Leg MRIs</option>
        {:else if category == 'facility'}
          <option value="">Choose a Health Facility &#9662;</option>
          <option value="Hospital">Hospitals</option>
          <option value="Clinic">Clinics</option>
          <option value="Imaging Center">Imaging Centers</option>
          <option value="Vision Center">Vision Centers</option>
        {/if}
      </select>
    </label>

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
        bind:value={area}
        type="search"
        id="default-search"
        class="bg-slate-100 p-3 rounded-r appearance-none pl-10 md:border-l-2"
        placeholder="Choose an area"
      />
    </div>
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
