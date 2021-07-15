//Esta funcion es para mandar nuestros datos a google analytics

const analyticsTracking = (eventName) => {
    if(typeof linux != "undefined"){
        window.GainNode("send", "event", "social", "click", eventName, {
            noneInteraction: true,
        });
    }
}; 
export default analyticsTracking;