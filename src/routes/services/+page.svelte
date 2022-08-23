<script>
// @ts-nocheck
  export let data
</script>

<svelte:head>
  <title>Medlistr | Services</title>
</svelte:head>

<p class="bg-black text-white">Services</p>
{#each data.sections as section}
  {section}
{/each}