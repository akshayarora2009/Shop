cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova.plugins.diagnostic/www/diagnostic.js",
        "id": "cordova.plugins.diagnostic.Diagnostic",
        "clobbers": [
            "cordova.plugins.diagnostic"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "id": "cordova-plugin-geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "id": "cordova-plugin-geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin.ActivityIndicator/www/activityIndicator.js",
        "id": "org.apache.cordova.plugin.ActivityIndicator.ActivityIndicator",
        "clobbers": [
            "ActivityIndicator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/it.mobimentum.phonegapspinnerplugin/www/spinnerplugin.js",
        "id": "it.mobimentum.phonegapspinnerplugin.SpinnerPlugin",
        "clobbers": [
            "window.spinnerplugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-directions/www/directions.js",
        "id": "cordova-plugin-directions.Directions",
        "clobbers": [
            "directions"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova.plugins.diagnostic": "0.0.1",
    "cordova-plugin-geolocation": "1.0.2-dev",
    "cordova-plugin-vibration": "1.2.1-dev",
    "cordova-plugin-dialogs": "1.1.2-dev",
    "org.apache.cordova.plugin.ActivityIndicator": "1.0.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.geolocation": "0.3.12",
    "it.mobimentum.phonegapspinnerplugin": "1.2.1",
    "cordova-plugin-directions": "0.4.1"
}
// BOTTOM OF METADATA
});