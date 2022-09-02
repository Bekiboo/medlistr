<script>
  import '../app.css' //Tailwind Css
  import { navigating } from '$app/stores'
  import Nav from '$lib/Nav.svelte'
import PreloadingIndicator from '$lib/PreloadingIndicator.svelte'
import Footer from '$lib/Footer.svelte'
</script>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<Nav />

<main class="container mx-auto min-h-[80vh] py-4 md:py-4 px-6">
  <slot />
</main>

<Footer />