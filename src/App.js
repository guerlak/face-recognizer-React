import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImgLinkForm/ImgLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './App.css';


const emptyUser = {
 
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''

}

const particlesParam = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'login',
      isLogged: false,
        user:{
            id: '',
            name: '',
            email: '',
            password: '',
            entries: 0,
            joined: ''
        }
    }
  }

  calcFaceLocation = (data) => {
   
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById('inputImage');
    const width = Number(img.width)
    const height = Number(img.height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }
  
  showFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (evt) => {
    console.log(evt.target.value);
    this.setState({input: evt.target.value})
  }

  onBtnSubmit = () => {

    fetch("http://localhost:3001/clarifai",{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        url: this.state.input
      })
    })
    .then(resp => resp.json())
    .then(image => {
      console.log(image)
      if(image){
        fetch("http://localhost:3001/image",{
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(resp => resp.json())
        .then(count => {
     
          this.setState(Object.assign(this.state.user, {entries: count.entries}))
        })
        this.showFaceBox(this.calcFaceLocation(image))
      }}) 
      .catch(err => console.log(err))
    }


  onRouteChange = (route) =>{
    
      if(route === 'signOut'){
        this.setState({isLogged: false})
        this.setState({user:emptyUser})
        this.setState({route:route});

      }else if(route === 'home'){
        this.setState({isLogged: true})
        this.setState({route:route})

      }else if(route === 'register'){
        this.setState({isLogged: false})
        this.setState({route:route})

      }else{
        this.setState({route:route});
      }
      
  }

  loadUser = (data) => {
    this.setState({user:{
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            entries: data.entries,
            joined: data.date

          }
    })               
  }

  render() {
    return (
      <div className="App">

        <Particles className='particles'
              params={particlesParam}
              style={{
                width: '100%',
                backgroundImage: 'url{Logo})'
              }} />

      <Navigation onRouteChange={this.onRouteChange} isLogged={this.state.isLogged}/>
      {
        this.state.route === "home" ?
      
        <div>
          {/* <Logo /> */}
          <Rank name={this.state.user.name} rankPosition={this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
          <FaceRecognition box={this.state.box} imageSrc={this.state.imageUrl}/>
        </div> :
      (
        this.state.route === "login" ?
      
        <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> :
        <Register onRouteChange={this.onRouteChange}/> 
      )

      }
      </div>
    );
  }
}
export default App;
