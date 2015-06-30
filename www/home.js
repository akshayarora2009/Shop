var point;
document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady(){


cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
    //alert("Location is " + (enabled ? "enabled" : "disabled"));
    if(!enabled)
    {
	alert('Location is disabled');
        cordova.plugins.diagnostic.switchToLocationSettings();
return;
    }
else
{
 	alert('Location is enabled');

}

	var onSuccess = function(position) {
point = new Parse.GeoPoint({latitude: position.coords.latitude, longitude: position.coords.longitude});

    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
ReactCode();
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);




});







}


function ReactCode(){

var OfferListings = React.createClass({

    mixins: [ParseReact.Mixin],



    observe: function(){







        
        var off = (new Parse.Query('OffersLive').include("PostedBy").near("pos",point).withinKilometers("pos",point,500));
 

        return {

            offers: off,
            

        }

    },


    render: function(){

        var myObj = this;

        return(
            <div>
            <ul className="list-group">
            {
                
                this.data.offers.map(function(c){
                    console.log(c);
                    

                    return <li key={c.objectId} className="list-group-item">{c.Title}<br/>{c.PostedBy.PlaceName}</li>
                    
                })
            }
            </ul>
            </div>
            );
    }




});

React.render(

    <OfferListings />,

    document.getElementById('listings')



    );




}