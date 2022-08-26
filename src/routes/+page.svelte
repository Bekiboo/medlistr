<script lang="ts">
import SearchPanel from "./SearchPanel.svelte";
import SearchResultsPanel from "./SearchResultsPanel.svelte";


</script>

<div class="max-w-[85ch] mx-auto mb-8">
  <img src="mountains.png" alt="moutains" class="w-32 md:w-52 mx-auto mb-4 md:mb-8" />
  <h1 class="text-3xl md:text-4xl text-center">
    Prices and Ratings for Healthcare in Utah
  </h1>
  <p class="text-center text-sm md:text-base mt-2">Learn the costs for medical services across the state, <br> plus how each of them has been ranked and rated.</p>
</div>

<div class="max-w-xl mx-auto">
  <SearchPanel />
  
  <SearchResultsPanel />
</div>