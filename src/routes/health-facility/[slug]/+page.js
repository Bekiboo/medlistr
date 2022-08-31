// @ts-nocheck
import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params

  const { data, error } = await supabase
    .from(
      `facility`
    )
    .select(
      `*, 
      facility_category!inner(*), 
      city!inner(*)`
    )
    .eq('id', slug)
    console.log(data);
  if (error) console.log(error)
  return data
}
