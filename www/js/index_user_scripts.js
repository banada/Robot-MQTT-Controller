(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var client;
    
     /* button  #connect-btn */
    $(document).on("click", "#connect-btn", function(evt)
    {
        var address = $("#ip-address").val();
        client = mqtt.connect('mqtt://' + address + '');
        console.log(address);
        client.on('connect', function() {
            console.log("Connected to mqtt broker");
            client.publish("test", "APP CONNECTED!");
        });
        client.subscribe("test");
    });
     
    $("#dpad-up").bind('touchstart', function() {
        console.log("FORWARD");
        client.publish("test", "FORWARD");
    }).bind('touchend', function() {
        console.log("STOP");
        client.publish("test", "STOP");
    });
     
    $("#dpad-down").bind('touchstart', function() {
        console.log("REVERSE");
        client.publish("test", "REVERSE");
    }).bind('touchend', function() {
        console.log("STOP");
        client.publish("test", "STOP");
    });
     
    $("#dpad-left").bind('touchstart', function() {
        console.log("LEFT");
        client.publish("test", "LEFT");
    }).bind('touchend', function() {
        console.log("STOP");
        client.publish("test", "STOP");
    });
     
    $("#dpad-right").bind('touchstart', function() {
        console.log("RIGHT");
        client.publish("test", "RIGHT");
    }).bind('touchend', function() {
        console.log("STOP");
        client.publish("test", "STOP");
    });
     
    var speed = "255";
    $("#dpad-middle").click(function() {
        //toggle between 0 and 255...for now
        if (speed === "255") {
            speed = "100";
        } else if (speed === "100") {
            speed = "255";
        }
        console.log(speed);
        client.publish("test", speed);
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
