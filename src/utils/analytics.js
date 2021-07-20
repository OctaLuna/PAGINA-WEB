//Esta funcion es para mandar nuestros datos a google analytics

const analyticsTracking = (eventName) => {
    if (typeof linux !== 'undefined') {
      window.ga('send', 'event', 'social', 'click', eventName, {
        nonInteraction: true
      });
    }
  };
  
  export default analyticsTracking;