var point;
document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady(){


cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
    //alert("Location is " + (enabled ? "enabled" : "disabled"));
    if(!enabled)
    {
        function onConfirm(buttonIndex) {
            //alert('You selected button ' + buttonIndex);
            if(buttonIndex == 1)
            {
                cordova.plugins.diagnostic.switchToLocationSettings();
            }
            else
            {
                navigator.app.exitApp();
            }
        }

// Show a custom confirmation dialog
//

            navigator.notification.confirm(
                'Oflyne needs Location enabled', // message
                onConfirm,            // callback to invoke with index of button pressed
                'Location is disabled',           // title
                'Go to Settings,Exit'         // buttonLabels
            );


return;
    }
else
{
 	//alert('Location is enabled');

}
    ActivityIndicator.show("Getting your location");
	var onSuccess = function(position) {
        ActivityIndicator.hide();
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

        var uniques = [];
        var off = (new Parse.Query('OffersLive').include("PostedBy").near("pos",point));


        for(var i=0; i<off.length; ++i)
        {
            if(uniques.indexOf(off[i].MasterCategory) > -1)
            {
                // array already has this value. Discard
            }
            else
            {
                uniques.push(off[i].MaterCategory);
            }

        }



        return {

            offers: off,
            uniqueCategory: uniques
            

        }

    },


    render: function(){


        var myObj = this;

        return(
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                                <p>Akshay</p>
                                </a>
                            </div>
                        </div>
                    </nav>
            <ul className="list-group">

            {
                
                this.data.offers.map(function(c){
                    console.log(c);
                    

                    return <li key={c.objectId} className="list-group-item">{c.Title}<span>{c.MasterCategory}</span><br/>{c.PostedBy.PlaceName}</li>
                    
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