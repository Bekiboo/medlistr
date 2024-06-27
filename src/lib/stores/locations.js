import { supabase } from '$lib/supabase'
import { writable } from 'svelte/store'

export const locationStore = writable([])
export const loadingLocations = writable()

export async function findLocations(searchType, service) {
  console.log('Search Type: ' + searchType)
  console.log('Service: ' + service)
  locationStore.set([])
  loadingLocations.set(true)
  const { data, error } = await supabase
    .from('location')
    .select(`name, ${searchType}!inner(*, ${searchType}_category!inner(*))`)
    .eq(`${searchType}.${searchType}_category.name`, service)
  loadingLocations.set(false)
  if (error) {
    locationStore.set([error.message])
    return console.error('fetchResults: ', error)
  }
  let result = data.map(({ name }) => name)
  locationStore.set(result)
}
