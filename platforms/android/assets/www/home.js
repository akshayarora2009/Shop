var point;
var category = 'default';
var uniques = [];
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

        getInitialState: function(){
            return {update: true};
        },



        observe: function(){

            if(category == 'default')
            {
                var off = (new Parse.Query('OffersLive').include("PostedBy").near("pos",point));
            }
            else
            {
                var off = (new Parse.Query('OffersLive').include("PostedBy").near("pos",point).equalTo("MasterCategory",category));
            }




            return {

                offers: off,



            }

        },
        categoryChanged: function(){
            alert('category changed');
            category = event.target.value;
            this.setState({update: !this.state.update});
        },
        offerClicked: function(c){

            $('.modal-body').text(c.Title);
            $('#myModal').modal('show');
        },


        render: function(){


            var myObj = this;

            return(
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Brand</a>
                                <select className="form-control" onChange={this.categoryChanged}>
                                    <option value="default">All</option>
                                    <option value="Food & Beverages">Food & Beverages</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Random">Random</option>
                                </select>
                            </div>


                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                                    <li><a href="#">Link</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#">One more separated link</a></li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </nav>

                    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="list-group">

                        {

                            this.data.offers.map(function(c){
                                console.log(c);


                                return <div onClick={myObj.offerClicked.bind(this,c)}><li key={c.objectId} className="list-group-item">{c.Title}<br/>{c.PostedBy.PlaceName}<br/>{c.MasterCategory}</li></div>

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