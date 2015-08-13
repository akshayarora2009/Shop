


var Email = React.createClass({

    handleSubmit: function(event){

        event.preventDefault();
        var email = React.findDOMNode(this.refs.mails).value;
       // window.location.href = "index.html";
        var EMAIL = Parse.Object.extend("User");
        var query = new Parse.Query(EMAIL);
        query.equalTo("email", email);
        query.find({
            success: function(results) {
                if(results.length === 0 )
                {
                    // User does not exist

                    window.location = "signup.html";
                }
                else
                {
                    window.location = "login.html";
                }
            },
            error: function(error) {

            }
        });


    },


    render: function(){




        return (

            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2">
                        <legend>Let's get started!</legend>
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Enter your E-mail address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" ref="mails" />
                            </div>

                            <div className="control-group">
                                <div className="controls">
                                    <input type="submit" className="btn btn-primary btn-block" value="Proceed" ></input>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        );



    }


});



React.render(<Email/>,document.getElementById('mount_here'));