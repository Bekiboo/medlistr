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
      `name, rating, nb_of_reviews, img_path, 
      facility_category!inner(name), 
      location!inner(name)`
    )
    .eq('id', slug)

  
  
  if (error) console.log(error)
  return data
}
