// @ts-nocheck
import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params

  const { data, error } = await supabase.from(`facilty`).select(
    `name, facility_to_facility_category!inner(id)`
  )
  .eq()
  // const { data, error } = await supabase.from(`service_category`).select(
  //   `name,
  //   service_category_to_option!inner(service_option!inner(name)),
  //   specialty!inner(name)`
  // )

  
  
  if (error) console.log(error)
  return data
}
