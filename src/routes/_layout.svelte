<script>
	import Nav from '../components/Nav.svelte';
	//Estamos importando el script de Main
	import Main from "../components/Main.svelte";

	export let segment;
</script>



<Nav {segment}/>

<Main>
	<slot></slot>
</Main>