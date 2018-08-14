import React, {Component} from 'react';

class Register extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    getEmail = (e) => {
        this.setState({email: e.target.value})
    }

    getPass = (e) => {
        this.setState({password: e.target.value})
    }

    getName = (e) => {
        this.setState({name: e.target.value})
    }

    onSubmit = () =>{

        fetch('https://frozen-dusk-72997.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
            }).then(user=>{
                if(user.id){
                    document.querySelector('#response-register').innerHTML = "<p class=rgreen>Register success</p>";
                }else{
                    document.querySelector('#response-register').innerHTML = "<p class=red>This email already exists</p>";
                }
        })

    }

    render(){
    
        return (
                <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Face Recognition</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >Name</label>
                                    <input onChange={this.getName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" id="name"/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >Email</label>
                                    <input onChange={this.getEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" id="email-address"/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" >Password</label>
                                    <input onChange={this.getPass} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" id="password"/>
                                </div>
                            </fieldset>
                            <div id="response-register"></div>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="_register" onClick={this.onSubmit}/>
                            </div>
                            <div className="lh-copy mt3">
                                <p>Already a member? <a href="#0" onClick={() => this.props.onRouteChange('login')}className="f6 link dim black db"><b>click here</b></a></p>
                            </div>
                        
                        </form>
                    </main>   
                </article>
                )
    }
}
export default Register;
