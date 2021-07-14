<!--Esto es nuestro Newletter que es para resivir targetas, estamos usando tinyletter-->

<style>
    input{
        background-color: rgb(0, 0, 0);
        background-image: none;
        /*Estp es para que tenga un detalle bordedo*/
        border-radius: 4px;
        border: 1px solid rgb(80, 80, 80);
        color: rgba(255, 255, 255, 0.705);
        display: inline-block;
    
        font-feature-settings: "tnum";
        font-size: 14px;
        /*Este es su grosor*/
        height: 32px;
        /*Esta es una linea*/
        line-height: 32px;
        list-style: none;
        margin: 0;
        outline: 0;
        padding: 4px 12px;
        width: 100%;
        box-sizing: border-box;
    }
    h4{
        font-size: 16px;
    }
    p{
        font-weight: 300;
        color: rgb(185, 185, 185);
        font-size: 15px;
        margin-bottom: 10px;
    }

    form{
        position: relative;
        width: 100%;
    }
    /*Este es nuestro boton*/
    .btn{
        box-shadow: inset 0px 1px 0px 0px #1e1e5d;
        background: linear-gradient(to bottom, #28287e 5%, #1e1e5d 100%);
        background-color: #1e1e5d;
        border-radius: 6px;
        border: 1px solid #141449;
        display: inline-block;
        cursor: pointer;
        color: #e5eaf5;
        font-size: 15px;
        font-weight: 300;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #0c0c3b;
        width: 100%;
    }
    .btn:hover {
        background: linear-gradient(to bottom, #202f42 5%, #212b38 100%);         
    }
    .btn:active{
        position: relative;
        top: 1px;
    }
    label{
        font-size: 12px;
    }

</style>


<div class="Newsletter">
    <h4>NEWSLETTER</h4>
    <p>Prueba de Newsletter</p>

    <form 
    action="https://tinyletter.com/OctaLuna" 
    method="post" 
    target="popupwindow" 
    onsubmit="window.open('https://tinyletter.com/OctaLuna', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
            <label for="tlemail">Enter your email address</label>
        </p>
        <p>
            <input type="text" style="width:140px" name="email" id="tlemail" />
        </p>
            <input type="hidden" value="1" name="embed"/>
            <button class="btn" type="submit" value="Subscribe">Suscriberse</button>
    </form>
        
</div>


