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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova.plugins.diagnostic": "0.0.1",
    "cordova-plugin-geolocation": "1.0.2-dev",
    "cordova-plugin-vibration": "1.2.1-dev",
    "cordova-plugin-dialogs": "1.1.2-dev",
    "org.apache.cordova.plugin.ActivityIndicator": "1.0.0"
}
// BOTTOM OF METADATA
});