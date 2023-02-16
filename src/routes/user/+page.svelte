<script>
	import { browser } from '$app/environment';
	import { getAccount } from '$lib/appwriteService';
	import { onMount } from 'svelte';

	let myEmail = 'Loading ...';

	onMount(async () => {
		if (browser) {
			const account = await getAccount();
			myEmail = account.email;
		}
	});
</script>

<h1>Welcome</h1>

<p>{myEmail}</p>
