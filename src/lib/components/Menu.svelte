<script lang="ts">
	import { quadOut } from "svelte/easing";
	import { fly, scale } from "svelte/transition";

	export let open: boolean = false;

	const menus = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Accordion",
			link: "/accordion",
		},
	];
</script>

{#if open}
	<div class="menu">
		{#each menus as menu, i}
			<p transition:fly={{ y: -15, delay: 50 * i }}>
				<a
					href={menu.link}
					on:click={() => {
						open = false;
					}}>{menu.name}</a
				>
			</p>
		{/each}
		<div
			class="bar"
			transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
		/>
	</div>
{/if}

<style>
	:global(html) {
		background: #1d1d2f;
	}
	.menu {
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		color: white;
		background-color: hsl(220 10% 10%);
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}
	p:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
	}
</style>
