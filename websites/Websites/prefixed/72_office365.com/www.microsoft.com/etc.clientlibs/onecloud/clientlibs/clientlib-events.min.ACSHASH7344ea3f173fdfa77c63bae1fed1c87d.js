const oc = { 
    event :  {
        cookiesPostConsent: { 
            name:"oc.event.cookiesPostConsent",
            lastdispatched: undefined,
            dispatch: function(){
                oc.event.cookiesPostConsent.lastdispatched = Date.now();
                document.dispatchEvent(new Event(oc.event.cookiesPostConsent.name));
            },
            onChanged : function(callback){
                if(typeof callback == "function")
                {
                    if(typeof oc.event.cookiesPostConsent.lastdispatched == 'undefined') {
                        document.addEventListener(oc.event.cookiesPostConsent.name, () => {
                            callback();
                        });
                    }
                    else {
                        callback(); 
                    }
                }                
            }
        },
        marketSelector: { 
            name:"oc.event.marketSelector",
            lastInit:undefined,
            dispatch: function(eventName, value){
                
                oc.event.marketSelector.lastInit = Date.now();

                var customEvent = document.createEvent('CustomEvent');
                    customEvent.initCustomEvent(oc.event.marketSelector.name, true, true, {
                        eventName: eventName, value: value
                    });

                document.dispatchEvent(customEvent);
            },
            onInit : function(callback){
                if(typeof callback == "function")
                {
                    if(typeof oc.event.marketSelector.lastdispatched == 'undefined') {
                        document.addEventListener(oc.event.marketSelector.name, (event) => {
                            if(event)
                            {
                                callback();                                
                            }                            
                        });
                    }
                    else {
                        callback(); 
                    }
                }                
            },
            onSelect : function(callback){
                document.addEventListener(oc.event.marketSelector.name, (event) => {
                    if(event.detail.eventName === "onselect")
                    {
                        callback();
                    }
                });          
            },
            onRefreshed : function(callback){
                document.addEventListener(oc.event.marketSelector.name, (event) => {
                    if(event.detail.eventName === "onrefreshed")
                    {
                        callback();
                    }
                });         
            }
        }
    },
    geo: {}
}

