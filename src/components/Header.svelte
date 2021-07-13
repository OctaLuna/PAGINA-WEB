<style>
    .Header{
        background-color: rgb(32, 32, 32);
        color: rgb(187, 187, 187);
        padding: 1em 0 0 0;
    }

    .Header-container{
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .Header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header h1{
        color: rgb(180, 180, 180);
        /*Este es el tamaño de la letra*/
        font-size: 20px;
        /*Este es el grosor de la letra*/
        font-weight: 700;
        /*Este es el espaciado de cada uno de los caracteres*/
        letter-spacing: 0.8px;
        /**Esto es para que cuando el mause pase haya un link*/
        cursor: pointer;
    }
    .Header h1 span{
        /*Esto es para tome toda la posicion y lo baje a un nivel*/
        display: block;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: normal;
        margin: 0.3em 0 0 0;
    }
    .Header ul {
        margin: 0;
        padding: 0;
        /*Esto es para que no utilise estilos*/
        list-style: none;
         
    }
    .Header li{
        /*Esto es para que se ajusten correctamente*/
        display: inline-block;
        margin: 0 0.5em 0 0;
    }
    .Header a{
        /*Esto es para que no tenga una decoracion por defecto*/
        text-decoration: none;
        font-weight: 300;
        font-size: 14px;
    }

    .Header-social img{
        width: 20px;
    }
</style>


<!--Primero creamos a nuestro Header-->
<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Marco Octavio Luna Vargas</h1>
                <span>Data-Science | Developers | Reader | Creative | Batman lover | history lover</span>
            </div>
            <div class="Header-social">
                <ul>
                    <li>
                        <a href="https://github.com/OctaLuna" target="_brack" rel="noreferrer">
                            <img src="github.png" alt="Github">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/marco-octavio-luna-vargas-77563a205/" target="_brack" rel="noreferrer">
                            <img src="linkedin.png" alt="Linkedin">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/marcooctavio.lunavargas.1/" target="_brack" rel="noreferrer">
                            <img src="facebook.png" alt="Facebook">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="Header-D-W-Mode">

            </div>
        </div>
    </div>
</header>