import { supabase } from '$lib/supabase'
import { writable } from 'svelte/store'

export const listOfLocations = writable([])
export const loadingLocations = writable()

export async function findLocations(category, option) {
  listOfLocations.set([])
  loadingLocations.set(true)
  const { data, error } = await supabase
    .from('location')
    .select(`name, ${category}!inner(*, ${category}_category!inner(*))`)
    .eq(`${category}.${category}_category.name`, option)
  loadingLocations.set(false)
  if (error) {
    listOfLocations.set([error.message])
    return console.error('fetchResults: ', error)
  }
  let result = data.map(({ name }) => name)
  listOfLocations.set(result)
}
