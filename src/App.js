import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Button } from '../node_modules/@material-ui/core';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD9n9I-wwULceGFE9HkzIffljZS2G8n2bI",
  authDomain: "temapentrumaine.firebaseapp.com",
  databaseURL: "https://temapentrumaine.firebaseio.com",
  projectId: "temapentrumaine",
  storageBucket: "temapentrumaine.appspot.com",
  messagingSenderId: "832758860748"
};
firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      success:false
    }
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>

        <h3>Acest site este sponsorizat de agenda instructorului.</h3>
        <TextField
          style={{ width: '60%' }}
          id="with-placeholder"
          label="Numele tau?"
          placeholder="Numele tau..."
          margin="normal"
          onChange={(event) => this.setState({ input: event.target.value })}
        />
        <br />
        <Button style={this.state.success===true?{color:'green'}:null} onClick={() => {
          if(this.state.success===false
          
          )
          firebase.database().ref('/').push(this.state.input)
          .then(()=>this.setState({success:true}))
        }}>{this.state.success===false?'Vreau Tema!':'Success! Vei primi tema pe mess in 10 minute maxim!'}</Button>
      </div>
    );
  }
}

export default App;
