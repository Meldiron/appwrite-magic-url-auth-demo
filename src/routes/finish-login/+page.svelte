<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { finishLogin } from '$lib/appwriteService';
	import { onMount } from 'svelte';

    onMount(async () => {
        if(browser) {
            const params = new URLSearchParams(window.location.search);
            const userId = params.get("userId") ?? "";
            const secret = params.get("secret") ?? "";
            await finishLogin(userId, secret);
            goto("/user");
        }
    });
</script>

<h1>Logging in..</h1>
