import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'
import type {
	ActiveId,
	AccordionOptions,
	CollapseContext,
	ActiveIdContext,
} from './types'

export const setAccordionOptions = ({ collapse }: AccordionOptions) => {
	const activeComponentId = writable<ActiveId>(null)
	setContext<CollapseContext>('collapse', collapse)
	setContext<ActiveIdContext>('active', activeComponentId)
}

export const getAccordionOptions = () => {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
	return { collapse, activeComponentId }
}
