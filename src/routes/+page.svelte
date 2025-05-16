<script lang="ts">
	import { fmtRezFull } from '$lib/index.js';
	import { onMount } from 'svelte';

	let text = $state('');
	const value = $derived.by(async () => fmtRezFull(JSON.parse(text)));

	onMount(() => {
		text = JSON.stringify(
			[
				['[ 📧 +1 EMAIL ]'],
				['📍 localhost [28/04/2025 22:48:01]', '└ © HostRapid : [Confidential For Private Use]'],
				[
					['🏦', 'Info'],
					['🕵️', 'First & Lastname', 'Robert Menard'],
					['🏠', 'Address', '3 rue de bx'],
					['📮', 'Zip', '01000'],
					['📞', 'Phone', 'FR +33 6 12 34 56 78'],
					['📧', 'Email', 'email@exemple.com'],
					['🎂', 'Birthday', '10/01/2000']
				],
				[
					['🏦', 'Card Number'],
					['💳', 'Number', '4970 4000 0000 0000'],
					['📅', 'Expiration', '10/30'],
					['🔒', 'CVV', '123']
				],
				[
					['🗃', 'Card Details'],
					['🏦', 'Bank', 'La Banque Postale'],
					['🏷 ', 'Brand', 'Visa'],
					['💳', 'Type', 'Debit'],
					['💵', 'Level', 'Classique'],
					['🚩', 'Pays', 'France']
				],
				[
					['🧩', 'Extra'],
					['🏷 ', 'Bin', '#497040'],
					['📣', 'Lang', 'fr'],
					['🌍', 'IP', '::1'],
					['🖥 ', 'OS', 'Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0'],
					['🔐', 'Password', '123456'],
					['🧬', 'ID', '#9a77b05efdf2dc1495e7bfc355ee48a5a7899cdf']
				]
			],
			null,
			2
		);
	});
</script>

<textarea bind:value={text} rows={50} cols={140}> </textarea>

{#await value}
	Building
{:then built}
	<h1>Result:</h1>
	<section>
		{#each built.split('\n') as line}
			<code>{line}</code>
			<br />
		{/each}
	</section>
	<main>
		{#each built.split('\n') as line}
			{#if line}
				<div>{@html line}</div>
			{:else}
				<p>{'   '}</p>
			{/if}
		{/each}
	</main>
{:catch err}
	<p style="color:red;">{err}</p>
{/await}

<style>
	main {
		font-family: system-ui;
		display: flex;
		flex-direction: column;
	}
</style>
