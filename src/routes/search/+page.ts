// @ts-nocheck
import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

// /** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
// export async function load({ params }) {
//     console.log(params.slug);
//   return params.slug
// }

export const load: PageServerLoad = async ({ params, url }) => {
  const category = url.searchParams.get('category')
  const option = url.searchParams.get('option')
  const location = url.searchParams.get('location')

  let results

  if (!category || !option) {
    throw new Error('Invalid Search Parameters')
  }

  async function findFacility() {
    console.log(location)

    if (
      location == 'undefined' ||
      location == undefined ||
      location == null ||
      !location
    ) {
      const { data, error } = await supabase
        .from(category)
        .select(`*, ${category}_category!inner(*), location!inner(*)`)
        .eq(`${category}_category.name`, option)
      if (error) return console.error('fetchResults: ', error)
      results = data
      return { searchDetails: { category, option, location }, results }
    } else {
      const { data, error } = await supabase
        .from(category)
        .select(`*, ${category}_category!inner(*), location!inner(*)`)
        .eq(`${category}_category.name`, option)
        .eq(`location.name`, location) //Tester avec location = null
      if (error) return console.error('fetchResults: ', error)
      results = data
      return { searchDetails: { category, option, location }, results }
    }
  }

  async function findService() {
    if (location != 'undefined') {
      const { data, error } = await supabase
        .from(category)
        .select(`*, ${category}_category!inner(*), location!inner(*)`)
        .eq(`${category}_category.name`, option)
        .eq(`location.name`, location)
      if (error) return console.error('fetchResults: ', error)
      results = data
      return { searchDetails: { category, option, location }, results }
    } else {
      const { data, error } = await supabase
        .from(category)
        .select(`*, ${category}_category!inner(*), location!inner(*)`)
        .eq(`${category}_category.name`, option)
      if (error) return console.error('fetchResults: ', error)
      results = data
      return { searchDetails: { category, option, location }, results }
    }
  }

  return category == 'facility' ? findFacility() : findService()
}
