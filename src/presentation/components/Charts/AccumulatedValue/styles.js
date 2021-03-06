import { tc } from '../../../utils'

export const chartPortal = tc(`
  absolute
  top-[23px]
  left-[-109px]
`)

export const card = tc(`
  w-[216px]
  h-[216px]
  max-w-[216px]
  max-h-[216px]
  mx-auto
`)

export const accumulatedContainer = tc(`
  text-center
  mb-2
`)

export const accumulatedTitle = tc(`
  text-xs
  text-carteira-global-gray-medium
`)

export const accumulatedValue = tc(`
  text-lg
  text-carteira-global-black
  font-semibold
`)

export const savedContainer = tc(`
  text-center
`)

export const savedTitle = tc(`
  text-xxs
  -mb-2
  text-carteira-global-gray-medium
`)

export const savedValue = tc(`
  text-xxs
  text-carteira-global-black
  font-semibold
`)

export const legendContainer = tc(`
  mt-9
`)

export const noData = tc(`
  text-xs
  text-center
  text-carteira-global-gray-medium
`)
