<script lang="ts">
	import { Hamburger } from "svelte-hamburgers";
	import Menu from "./Menu.svelte";

	let open: boolean = false;
</script>

<header>
	<h1>
		<a href="/">SVELTE COMPONENTS</a>
	</h1>
	<Hamburger bind:open --color="white" />
</header>
<Menu bind:open />

<style>
	header {
		font-size: 0.6rem;
		position: fixed;
		display: flex;
		justify-content: space-between;
		width: 100%;
		z-index: 1;
	}

	h1 {
		margin: 0;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		header {
			font-size: 1rem;
		}
	}
</style>
