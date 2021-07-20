//Esto es para formatear la fecha
const formatIsoTime = isoTime =>{
    let date = new Date(isoTime);
    //Esto es toda la fecha que queremos ver de nuestra fecha
    let options = { years: "numeric", month: "long", day: "numeric"};
    //toLocaleDateString("es-Es", options) esto es para cambiar el idioma a español
    return date.toLocaleDateString("es-Es", options);
};

export default formatIsoTime;