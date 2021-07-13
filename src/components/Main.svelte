<!--Este archivo es parte del layout.svelte-->

<style>
    :global(body){
        background-color: rgb(44, 44, 44);
    }
    :global(h1){
        color: white;
    }
    :global(h2){
        color: white;
    }
    :global(h3){
        color: white;
    }
    :global(p){
        color: white;
    }
    :global(li){
        color: white;
    }
    :global(div){
        color: white;
    }
    .Main-container{
        /*Esto es para poner la sección de nuestros elementos*/
        display: grid;
        /*Esto es para que se ajuste automaticamente hasta 1024px*/
        grid-template-columns: minmax(auto, 1024px);
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
            <slot></slot>
            <div class="Sidebar">Sidebar</div>
        </div>
    </div>
</main>