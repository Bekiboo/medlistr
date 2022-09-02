<script lang="ts">
  export let data: any[]

  let facility = data[0]
</script>

{JSON.stringify(facility)}
<br />
<br />
<br />
<h1>{facility.name}</h1>
<h2>{facility.facility_category.name}</h2>
<h2>{facility.location.name}</h2>