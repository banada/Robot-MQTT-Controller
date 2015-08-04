#Robot MQTT Controller

This is an app to control a robot or car through Node-RED.

It is built in Intel XDK, you can import and build an APK.

Usage:

Enter IP address and port of the MQTT server and press connect.

e.g. 192.168.123.4:8080

The MQTT topic should be called "test".

Output:

Pressing "Connect": APP CONNECTED!
Outputs: FORWARD/REVERSE/LEFT/RIGHT/STOP
Center Button: Toggles 255/100
