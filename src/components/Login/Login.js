import React,{Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
          inputEmail: '',
          inputPassword: ''
    
        }
      }

      getEmail = (e) => {
        this.setState({inputEmail: e.target.value})
      }

      getPass = (e) => {
        this.setState({inputPassword: e.target.value})
      }

      onSubmit = () =>{

        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.inputEmail,
                password:this.state.inputPassword
            })
        })
        .then(resp => resp.json())
        .then(user => {
            console.log("User id: " + user.id)
            if(user !== "null"){
                this.props.onRouteChange('home');
                this.props.loadUser(user);
            }else{
                document.getElementById('errorLogin').innerHTML = '<p style="color: red"> Error login </p>';
            }
        })
        
      }

    render(){      
    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                
                    <fieldset  className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" >Email</label>
                            <input onChange={this.getEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" >Password</label>
                            <input onChange={this.getPass} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => this.onSubmit()}/>
                    </div>
                    <div id="errorLogin"></div>
                    <div className="lh-copy mt3">
                        <a href="#0" onClick={() => this.props.onRouteChange('register')}className="f6 link dim black db">Register</a>
                    </div>
              
            </main>   
            </article>
        )
    }
}
export default Login;
