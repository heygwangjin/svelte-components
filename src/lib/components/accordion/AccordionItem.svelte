<script lang="ts">
	import { getAccordionOptions } from './context'
	import { slide } from 'svelte/transition'

	export let open = false

	const componentId = crypto.randomUUID()

	const { collapse, activeComponentId } = getAccordionOptions()

	const setActive = () => {
		$activeComponentId = componentId
	}

	const toggleOpen = () => {
		open = !open
	}

	const handleClick = () => {
		collapse ? setActive() : toggleOpen()
	}

	$: open && collapse && setActive()
	$: isActive = $activeComponentId === componentId
	$: isOpen = collapse ? isActive : open
</script>

<div class="accordion-item">
	<button on:click={handleClick} class="accordion-toggle">
		<div class="accordion-title">
			<slot name="title" />
		</div>

		<div class="accordion-caret" class:open={isOpen}>👉</div>
	</button>

	{#if isOpen}
		<div transition:slide class="accordion-content">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.accordion-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: var(--accordion-toggle-padding, 1rem);
		color: var(--accordion-toggle-color, inherit);
		font: inherit;
		font-weight: 600;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-toggle-radius, 4px);
		transition: background-color 0.2s ease-in-out;
	}

	.accordion-toggle:hover {
		background-color: var(--accordion-toggle-hover, hsl(220 20% 20%));
	}

	.accordion-content {
		padding: var(--accordion-content-padding, 1rem);
	}

	.accordion-caret {
		transition: rotate 0.3s ease;
	}

	.open {
		rotate: 90deg;
	}
</style>
