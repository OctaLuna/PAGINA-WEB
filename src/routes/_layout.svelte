<script>
	import Nav from '../components/Nav.svelte';
	//Estamos importando el script de Main
	import Main from "../components/Main.svelte";
	//Estamos importando el Header
	import Header from "../components/Header.svelte";
	//Estamos importando Footer
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>


<Header />
<Nav {segment}/>

<Main>
	<slot></slot>
</Main>
<Footer />