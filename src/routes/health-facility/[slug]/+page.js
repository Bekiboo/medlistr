// @ts-nocheck
import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params

  const { data, error } = await supabase
    .from(
      `health_facilities`
    )
    .select(
      `*, 
      health_facility_categories!inner(*), 
      cities!inner(*)`
    )
    .eq('id', slug)
  if (error) throw error(404, 'Not found')
  return data
}
