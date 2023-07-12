import './App.css';
import { useState, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import axios from 'axios';
import CardArtist from './components/CardArtist/CardArtist';

function Welcome(props) {
  return <h1 className='text-3xl'>Hello, {props.name}</h1>;
}

function App(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = `React Spotify Test`;

    const clientId = 'a4819256614348ae8aead5defa741c51'; // Tu client id
    const clientSecret = '85be837e231a44f28144914fa828d3b5'; // Tu secret

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    };

    axios(authOptions)
      .then(response => {
        if (response.status === 200) {
          const token = response.data.access_token;
          const options = {
            url: 'https://api.spotify.com/v1/artists/5LCDv4TvYRQD5ehflOBEh4',
            method: 'get',
            headers: {
              'Authorization': 'Bearer ' + token
            }
          };
          return axios(options);
        }
      })
      .then(response => {return response.data})
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (
    <div className="App">
      <MainHeader />
      <Welcome name="Alejandro" />
      <hr />
      <div className='cards-artist-container'>
        <CardArtist imgUrl={data.images[0]?.url} title={data.name} span={data.genres}></CardArtist>
      </div>
    </div>
  );
}

export default App;
