<!--Este archivo es parte del layout.svelte-->

<script>
    //Estamos importando el Sidebar
	import Sidebar from "./Sidebar.svelte";
</script>

<style>
    :global(body){
        background-color: rgb(44, 44, 44);
    }
    div{
        color: white;
    }
    .Main-container{
        /*Esto es para poner la sección de nuestros elementos*/
        display: grid;
        /*Esto es para que se ajuste automaticamente hasta 1024px*/
        grid-template-columns: minmax(auto, 1300px);
        /*Esto es para que este en el centro*/
        justify-content: center;
        /*Esto es para alinear lso items que tengamos*/
        align-items: center;
    }
    .Main-content{
        /*Esto es un margen para poder separa de la parte superior del content*/
        margin: 2em 0 0 0;
        /*Esto es para poner la sección de nuestros elementos*/
        display: grid;
        /*Esto es para 3fracciones para la parte de blogpost y el 1fr es para el Sidebar*/
        grid-template-columns: 3fr 1fr;
        /*Esto es una separacion para cada uno de ellos*/
        grid-gap: 60px;
        /*Esto es para separarla directamente*/
        justify-content: space-between;
    }
</style>
<!--Estamos creando el main-->
<main class="Main">
    <div class="Main-container">
        <div class="Main-content">
            <slot />
            <!--Estamos poniendo nuestro Sidebar-->
            <Sidebar />
        </div>
    </div>
</main>