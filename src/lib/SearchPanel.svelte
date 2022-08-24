<script>

</script>

<form class="flex flex-col items-center shadow-xl w-min mx-auto bg-white p-8">
    <div class="flex flex-col md:flex-row">
      <label>
        <select name="type" class="bg-slate-100 p-3 rounded-l appearance-none w-full md:w-auto mb-2 md:mb-2" required>
          <option value="">Choose a Service &#9662;</option>
          <option value="flashFlood">Eye Exams</option>
          <option value="hail">LASIK</option>
          <option value="tornado">Cataract Surgery</option>
          <option value="hurricance">Leg Joint MRIs</option>
          <option value="thunderstorm">Leg MRIs</option>
        </select>
      </label>
  
      <label for="default-search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500"
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
          type="search"
          id="default-search"
          class="bg-slate-100 p-3 rounded-r appearance-none pl-10 md:border-l-2"
          placeholder="Choose an area"
        />
      </div>
    </div>
    <button class="-mb-12 mt-4 bg-orange-500 hover:bg-orange-400 rounded text-white w-min px-2 py-1" type="submit">Search</button>
  </form>
  