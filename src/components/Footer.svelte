<!--Este es nuesfro fooder-->

<style>
    .Footer{
        background-color: #f9f3ec;
        color: black;
        padding: 0 0 0 0;
        margin: 2em 0 0 0;
        font-size: 13px;
        /*Este es el grosor de la letra*/
        font-weight: 300;
    }
    .Footer-container{
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }
    .Footer-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
    }

    .Footer-Hecho{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Footer-Hecho img{
        margin: 0 0 0 0.5em;
        width: 50px;
        align-items: center;
        justify-content: center;
    }
</style>

<footer class="Footer">
    <div class="Footer-container">
        <div class="Footer-content">
            <div class="Footer-copy">
                Hecho por Octavio, gracias a mi linda familia que sin ellos nada de esto seria posible
            </div>
            <div class="Footer-Hecho">
                Hecho en svelte y Platzi
                <img src="Murcielago.png" alt="Murcielago">
            </div>
        </div>
    </div>
</footer>