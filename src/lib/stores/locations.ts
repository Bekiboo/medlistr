import { supabase } from '$lib/supabase'
import { writable, type Writable } from 'svelte/store'

export const listOfLocations: Writable<any[]> = writable([])
export const loadingLocations: Writable<boolean> = writable()

export async function findLocations(category: string, option: string) {
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
