<script>
	import { login } from "$lib/appwriteService";


    let mail = "";

    async function onButtonClick() {
        await login(mail);
        alert("Check your inbox at " + mail);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<hr>

<input bind:value={mail} type="email" placeholder="Enter your email">
<br>
<button on:click={onButtonClick}>Passwordless Login</button>