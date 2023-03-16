import querystring from 'querystring';
import axios from 'axios';

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const ADD_TRACKS_ENDPOINT = `https://api.spotify.com/v1/playlists/5TQwMBSiBWIkpGdVlfe2T0/tracks`;
const SEARCH_TRACKS_ENDPOINT = `https://api.spotify.com/v1/search`;

const getAccessToken = async () => {
  const { data } = await axios.get('http://localhost:3001/api/env');
  const { client_id, client_secret, refresh_token } = data;
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const addTracks = async (uri) => {
  const { access_token } = await getAccessToken();

  const response = await fetch(ADD_TRACKS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "uris": [    
        uri
      ]
    })
  })

  return response.json()
};

export const searchTracks = async (name,artist) => {
  const { access_token } = await getAccessToken();
  const response = await fetch(`${SEARCH_TRACKS_ENDPOINT}?q=${name}+artist:${artist}&type=track&limit=1`, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
};