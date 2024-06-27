import { supabase } from '$lib/supabase'
import { serviceCategoryStore } from '$lib/stores/serviceCategories'

let servicesValue

serviceCategoryStore.subscribe((value) => {
  servicesValue = value
})

/** @type {import('../../../../.svelte-kit/types/src/routes/health-facility/[slug]/$types').PageLoad} */
export async function load() {
  if (servicesValue == '') {
    // const { data, error } = await supabase.from(`service_category`).select(
    //   `name,
    //   service_category_to_option!inner(service_option!inner(name)),
    //   specialty!inner(name)`
    // )
    const { data, error } = await supabase
      .from(`specialty`)
      .select(`name, service_category!inner(name)`)
    if (error) console.log(error)

    let result = []

    for (const key in data) {
      if (key in data) {
        let item = { specialty: data[key].name, serviceCategories: [] }
        let serviceCategory = data[key].service_category

        for (const key in serviceCategory) {
          if (key in serviceCategory) {
            item.serviceCategories.push(serviceCategory[key].name)
          }
        }

        result.push(item)
      }
    }
    serviceCategoryStore.set(result)
  }
}

// Here is what the JSON should look like
// let resultExample = [
//   {
//     specialty: 'radiology',
//     services: [
//       {
//         name: 'Brain MRI',
//         options: ['with contrast', 'without contrast'],
//       },
//       {
//         name: 'Back MRI',
//         options: ['with contrast', 'without contrast'],
//       },
//       {
//         name: 'Leg/Ankle MRI',
//         options: ['with contrast', 'without contrast', 'with & without MRI'],
//       },
//     ],
//   },
// ]
