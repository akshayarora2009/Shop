var SignInForm = React.createClass({
        
    getInitialState: function(){

        return { isLoading: false }
    },

    handleSubmit: function(event){

        event.preventDefault();

        this.setState({ isLoading: true});
        var mystateobject = this;

        var mail = React.findDOMNode(this.refs.mail).value;
        var pass = React.findDOMNode(this.refs.pass).value;
           

        Parse.User.logIn(mail,pass, {
            success: function(user){
                mystateobject.setState ({ isLoading: false });
                alert('Successfully logged in');
                //window.location.href="index.html";
                    
            },
            error: function(user,error) {
                alert('The username and password combo did not match');
                mystateobject.setState({isLoading: false});

            }
        });


    },

    render: function(){

        var loading = this.state.isLoading;
           
        return(

            <div className="row">
            <div className="col-md-4 col-md-offset-4">
            <legend>Login with our secure Server</legend>
            <form onSubmit={!this.state.isLoading ? this.handleSubmit : null}>

            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" ref="mail" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="pass" />
            </div>

            <div className="control-group">
            <div className="controls">
            <input type="submit" className="btn btn-primary btn-block" disabled={this.state.isLoading} value={ loading ? "Loading..." : "Log In"  } onClick={this.clicked}></input>
            </div>
            </div>

            </form>
            </div>
            </div>

            );

    }

});


   

var SignUpForm = React.createClass({


    getInitialState: function(){

        return {isLoading: false};

    },

    handleSubmit: function(event){
        event.preventDefault();

        this.setState({isLoading: true});

        var MyStateObject = this;

        var name= React.findDOMNode(this.refs.name).value;
        var mail= React.findDOMNode(this.refs.mail).value;
        var pass= React.findDOMNode(this.refs.pass).value;
            

        var user = new Parse.User();
        user.set("Name",name);
        user.set("username", mail);
        user.set("password", pass);
        user.set("email", mail);
            
 
        // other fields can be set just like with Parse.Object
        //user.set("phone", "415-392-0202");
 
        user.signUp(null, { 
            success: function(user) {
                alert('SignUp was succesful');
                //window.location.href="user.html";
                // Hooray! Let them use the app now.
                MyStateObject.setState({isLoading: false});
                window.location.href="index.html";
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                //$('#invalidmsg').hide();
                MyStateObject.setState({isLoading: false});
            }
        });

    },


    render: function(){


        return(
            <div className="row">
            <div className="col-md-4 col-md-offset-4">
            <legend>Sign Up </legend>
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
            <label htmlFor="name1">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" ref="name" />
            </div>
            <div className="form-group">
            <label htmlFor="mail1">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="Enter E-mail" ref="mail" />
            </div>
            <div className="form-group">
            <label htmlFor="pass1">Password</label>
            <input type="password" className="form-control" id="pass" placeholder="Enter Password"  ref="pass" />
            </div>
     
            <div className="control-group">
            <div className="controls">
            <input type="submit" className="btn btn-primary btn-block" value={!this.state.isLoading ? "Sign Up" : "Loading..."} />
            </div>
            </div>

            </form>
            </div>
            </div>

            );
    }

});







React.render(

    <div className='container'>
    <SignInForm />
    <br/>
    <SignUpForm />
    </div>,
document.getElementById('formm')
       
        );