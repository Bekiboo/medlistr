<script>
  export let showCategoryPanel = false
  export let selectedService

  let list = []

  const openDropdown = () => (showCategoryPanel = true)

  // const closeDropdown = () => setTimeout(closeDropdownForReal, 250) // needed because on:blur will close the dropdown before an item is selected
  // const closeDropdownForReal = () => (showCategoryPanel = false)
</script>

<label for="default-search" class="sr-only">Search</label>
<div class="relative">
  <div
    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  >
    <svg
      class="w-6 h-6 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  </div>

  <span
    on:click={openDropdown}
    type="search"
    id="default-search"
    class="bg-slate-100 p-3 rounded-r pl-10 w-72 sm:w-80 cursor-pointer 
    {selectedService ? 'text-black' : 'text-gray-500'}"
    placeholder="Choose an option"
    autocomplete="off"
    >{selectedService ? selectedService : 'Choose a Category'}</span
  >
  <div
    class="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none"
  >
    <svg
      class="w-6 h-6 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
</div>

<!-- Allergy and immunology
Anesthesiology
Dermatology
Diagnostic radiology
Emergency medicine
Family medicine
Internal medicine
Medical genetics
Neurology
Nuclear medicine
Obstetrics and gynecology
Ophthalmology
Pathology
Pediatrics
Physical medicine and rehabilitation
Preventive medicine
Psychiatry
Radiation oncology
Surgery
Urology -->
