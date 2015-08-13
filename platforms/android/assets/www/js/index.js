var point;
var category = 'default';
var uniques = [];
var ifLocationOff = false;
document.addEventListener("deviceready", onDeviceReady, false);


function onResume(){

    if(ifLocationOff === true)
    {
        cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
            //alert("Location is " + (enabled ? "enabled" : "disabled"));
            if(!enabled)
            {
                ifLocationOff = true;
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
                ifLocationOff = false;

            }
            //ActivityIndicator.show("Getting your location");
            var onSuccess = function(position) {
                ActivityIndicator.hide();
                point = new Parse.GeoPoint({latitude: position.coords.latitude, longitude: position.coords.longitude});

                /*alert('Latitude: '          + position.coords.latitude          + '\n' +
                 'Longitude: '         + position.coords.longitude         + '\n' +
                 'Altitude: '          + position.coords.altitude          + '\n' +
                 'Accuracy: '          + position.coords.accuracy          + '\n' +
                 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                 'Heading: '           + position.coords.heading           + '\n' +
                 'Speed: '             + position.coords.speed             + '\n' +
                 'Timestamp: '         + position.timestamp                + '\n');*/

                ReactCode();
            };

// onError Callback receives a PositionError object
//
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess);




        });

    }

    var internet = navigator.connection.type;

    if( internet == "none")
    {

        function alertDismissed() {
            navigator.app.exitApp();
        }

        navigator.notification.alert(
            'Cannot connect to the internet',  // message
            alertDismissed,         // callback
            'No connection',            // title
            'Exit'                  // buttonName
        );

    }
}



function onDeviceReady(){
    document.addEventListener("resume",onResume,false);

    var internet = navigator.connection.type;

    if( internet == "none")
    {

        function alertDismissed() {
            navigator.app.exitApp();
        }

        navigator.notification.alert(
            'Cannot connect to the internet',  // message
            alertDismissed,         // callback
            'No connection',            // title
            'Exit'                  // buttonName
        );

    }

    cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
        //alert("Location is " + (enabled ? "enabled" : "disabled"));
        if(!enabled)
        {
            ifLocationOff = true;
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
                'Oflyn needs Location enabled', // message
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
       // ActivityIndicator.show("Getting your location");
        spinnerplugin.show();
        var onSuccess = function(position) {
            //ActivityIndicator.hide();
            spinnerplugin.hide();
            point = new Parse.GeoPoint({latitude: position.coords.latitude, longitude: position.coords.longitude});

            /*alert('Latitude: '          + position.coords.latitude          + '\n' +
             'Longitude: '         + position.coords.longitude         + '\n' +
             'Altitude: '          + position.coords.altitude          + '\n' +
             'Accuracy: '          + position.coords.accuracy          + '\n' +
             'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
             'Heading: '           + position.coords.heading           + '\n' +
             'Speed: '             + position.coords.speed             + '\n' +
             'Timestamp: '         + position.timestamp                + '\n');*/

            ReactCode();
        };

// onError Callback receives a PositionError object
//
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess,onError,{maximumAge: 0, timeout: 10000, enableHighAccuracy:true});




    });







}



function ReactCode(){


    var OfferListings = React.createClass({

        mixins: [ParseReact.Mixin],

        getInitialState: function(){
            return {update: true};
        },



        observe: function(){

            var off;
            if(category == 'default')
            {
                off = (new Parse.Query('masterList').near("Coordinates",point));
            }
            else
            {
                off = (new Parse.Query('masterList').near("Coordinates",point).equalTo("MasterCategory",category));
            }




            return {

                offers: off


            }

        },
        categoryChanged: function(){

            category = event.target.value;
            this.setState({update: !this.state.update});
        },
        navigate: function(c){
            alert('works');
            alert(c.latitude);
            alert(c.longitude);
        directions.navigateTo("51.50722", "-0.12750");

        },

        offerClicked: function(c){

            React.render(<Modal/>,document.getElementById('bs_modal') );

            $('.modal-body').html("<h3>" + c.Title + "</h3><br/><button class='btn btn-default' onclick='this.navigate(c);'>Get Directions</button>" );
            $('#myModal').modal('show');

        },


        render: function(){


            var myObj = this;

            return(
                <div>
                    <div className="navmenu navmenu-default navmenu-fixed-left offcanvas-sm">
                        <a className="navmenu-brand visible-md visible-lg" href="#">Oflyn</a>
                        <ul className="nav navmenu-nav">
                            <li className="active"><a href="./">..</a></li>
                        </ul>
                        <ul className="nav navmenu-nav">
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                                <ul className="dropdown-menu navmenu-nav">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar navbar-default navbar-fixed-top hidden-md hidden-lg">
                        <button type="button" id="left_menu_toggle" className="navbar-toggle pull-left" data-toggle="offcanvas" data-target=".navmenu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Oflyn</a>
                    </div>

                    <div id="bs_modal"/>




                    <ul className="list-group">

                        {

                            this.data.offers.map(function(c){
                                console.log(c);


                                return <div onClick={myObj.offerClicked.bind(this,c)}><li key={c.objectId} className="list-group-item"><div className="media">
                                    <div className="media-left">
                                        <a href="#">
                                            <img style={{height : '64px',width:'64px'}} className="media-object" src="assets/logo.png" alt="..."></img>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">{c.PlaceName}</h4>

                                        <h5>{c.BranchName}<span className="pull-right">{(point.kilometersTo(c.Coordinates)).toFixed(2)} km</span></h5>


                                    </div>
                                </div></li></div>

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