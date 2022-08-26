import { createClient } from '@supabase/supabase-js'
import { writable, type Writable } from 'svelte/store'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const searchResults: Writable<any[]> = writable([])

export const loadResults = async (
  searchCategory: string,
  option: string,
  area: string
) => {
  searchResults.set(['loading'])

  if (area) {
    const { data, error } = await supabase
      .from(searchCategory)
      .select('*, health_facility_categories!inner(*), cities!inner(*)')
      .eq('health_facility_categories.name', option)
      .eq('cities.name', area)
    if (error) return console.error('fetchResults: ', error)
    searchResults.set(data)
  } else {
    const { data, error } = await supabase
      .from(searchCategory)
      .select('*, health_facility_categories!inner(*), cities!inner(*)')
      .eq('health_facility_categories.name', option)
    if (error) return console.error('fetchResults: ', error)
    searchResults.set(data)
  }
}
