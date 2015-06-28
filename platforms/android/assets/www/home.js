







var OfferListings = React.createClass({

    mixins: [ParseReact.Mixin],

    observe: function(){

        
        var off = (new Parse.Query('OffersLive').include("PostedBy"));
 

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
                    
                    /*var PlaceName;
                    var tempObj = Parse.Object.extend("masterList"); 
                    var query = new Parse.Query(tempObj);
                    query.equalTo("objectId",c.PostedBy.objectId);
                    query.find({
                        success: function(postedby){
                            PlaceName = (postedby[0].get("PlaceName"));
                            
                        }

                    });
                    */
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

