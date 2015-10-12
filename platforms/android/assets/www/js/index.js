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

    if( internet === "none")
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

        componentDidMount: function(){
            componentHandler.upgradeDom();
        },

        componentDidUpdate: function(){
            componentHandler.upgradeDom();
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
                <div >
                        <div id="bs_modal"></div>


                    <div id="header-parent" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                        <header className="mdl-layout__header">
                            <div className="mdl-layout__header-row">

                                <span className="mdl-layout-title">Title</span>

                                <div className="mdl-layout-spacer"></div>

                                <nav className="mdl-navigation mdl-layout--large-screen-only">
                                    <a className="mdl-navigation__link" href="">Link</a>
                                    <a className="mdl-navigation__link" href="">Link</a>
                                    <a className="mdl-navigation__link" href="">Link</a>
                                    <a className="mdl-navigation__link" href="">Link</a>
                                </nav>
                            </div>
                        </header>
                        <div className="mdl-layout__drawer">
                            <span className="mdl-layout-title">Title</span>
                            <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="">Link</a>
                                <a className="mdl-navigation__link" href="">Link</a>
                                <a className="mdl-navigation__link" href="">Link</a>
                                <a className="mdl-navigation__link" href="">Link</a>
                            </nav>
                        </div>
                        <main className="mdl-layout__content">
                            <div className="page-content">


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
                        </main>
                    </div>



                    </div>





            );
        }




    });

    React.render(

        <OfferListings />,

        document.getElementById('listings')



    );




}