<script>
  import { page } from '$app/stores'
  import { navigating } from '$app/stores'

  let expanded = false

  navigating.subscribe(() => {
    expanded = false
  })
</script>

<nav class="bg-blue-800 border-gray-200 px-2 sm:px-4">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <!-- Logo -->
    <a rel="prefetch" href="/" class="flex items-center">
      <img
        src="white-medListr-logo.png"
        class="mr-3 h-9 my-4 sm:h-9"
        alt="Medlistr Logo"
      />
    </a>

    <!-- Open Hamburger Button -->
    <button
      type="button"
      class="p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded={expanded}
      on:click={() => {
        expanded = !expanded
      }}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6 fill-white"
        aria-hidden="true"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
    </button>

    <!-- Links -->
    <div
      class="w-full md:block md:w-auto
		{expanded ? 'fixed p-3 top-0 left-0 bg-blue-800 h-[100vh]' : 'hidden'}"
      id="navbar-default"
    >
      <!-- Close Hamburger Button -->
      <button
        type="button"
        class="flex p-2 ml-auto mr-0 text-sm rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={expanded}
        on:click={() => {
          expanded = !expanded
        }}
      >
        <span class="sr-only">Close main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 fill-white"
          viewBox="0 0 320 512"
          ><path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          /></svg
        >
      </button>

      <ul
        class="flex flex-col items-center p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
      >
        <li class="mt-5 md:mt-0">
          <a
            rel="prefetch"
            href="/"
            class="text-white md:pl-0"
            aria-current={$page.url.pathname === '/' ? 'page' : false}
          >
            Home
          </a>
        </li>
        <li class="mt-5 md:mt-0">
          <a
            rel="prefetch"
            href="/about"
            class="text-white rounded md:border-0 md:pl-0"
            aria-current={$page.url.pathname === '/about' ? 'page' : false}
          >
            About
          </a>
        </li>
        <li class="mt-5 md:mt-0">
          <a
            rel="prefetch"
            href="/contact"
            class="text-white md:pl-0"
            aria-current={$page.url.pathname === '/contact' ? 'page' : false}
          >
            Contact
          </a>
        </li>
        <li class="mt-5 md:mt-0">
          <a
            rel="prefetch"
            href="/claim-a-listing"
            class="text-white md:pl-0"
            aria-current={$page.url.pathname === '/claim-a-listing'
              ? 'page'
              : false}
          >
            Claim a listing
          </a>
        </li>
        <li
          class="mt-5 md:mt-0 py-1 px-4 bg-white duration-100 hover:bg-blue-200 rounded-full"
        >
          <a rel="prefetch" href="/report" class="text-slate-700 md:pl-0">
            Report a Price
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  [aria-current]::before {
    content: '';
    display: block;
    height: 2px;
    left: 0;
    right: 0;
    background-color: white;
    transform: scale(0, 1);
    transition: transform ease-in-out 50ms;
  }

  [aria-current]:hover::before {
    transform: scale(1, 1);
  }

  [aria-current~='page']::before {
    transform: scale(1, 1);
  }
</style>
