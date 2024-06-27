// @ts-nocheck
import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params

  const { data, error } = await supabase
    .from(`facility`)
    .select(
      `name, rating, nb_of_reviews, img_path, 
      facility_to_facility_category!inner(facility_category!inner(name)),
      location!inner(name)`
    )
    .eq('id', slug)

  let facility = data[0]

  let facilityCategories = []
  
  facility.facility_to_facility_category.forEach(element => {
    facilityCategories.push(element.facility_category.name)
  });
  
  if (error) console.log(error)
  return {
    name: facility.name,
    rating: facility.rating,
    nb_of_reviews: facility.nb_of_reviews,
    img_path: facility.img_path,
    facility_category: facilityCategories
  }
}
