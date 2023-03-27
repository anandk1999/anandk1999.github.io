const querystring = require('querystring');
const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3001;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const app = express();

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const ADD_TRACKS_ENDPOINT = `https://api.spotify.com/v1/playlists/5TQwMBSiBWIkpGdVlfe2T0/tracks`;
const SEARCH_TRACKS_ENDPOINT = `https://api.spotify.com/v1/search`;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/env', (req, res, next) => {
res.json({ client_id, client_secret, refresh_token });
});

const getAccessToken = async () => {
  const data = await axios.get('https://anandk1999-music.onrender.com/api/env');
  const client_id = data.data.client_id;
  const client_secret = data.data.client_secret;
  const refresh_token = data.data.refresh_token;
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const {access_token} = await getAccessToken();
  if (!access_token) {
    return null;
  }
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  if (!access_token) {
    return null;
  }
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

app.get('/', async (_, res) => {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    const alt = await getRecentlyPlayed();
    if (alt.status === 204 || alt.status > 400) {
      return res.status(200).json({});
    }
    const altSong = await alt.json();
    const parsed = JSON.parse(JSON.stringify(altSong));
    const title = parsed.items[0].track.album.name
    const artist = parsed.items[0].track.artists.map((_artist) => _artist.name).join(', ');
    const albumImageUrl = parsed.items[0].track.album.images[0].url;
    const songUrl = parsed.items[0].context.external_urls.spotify

    return res.status(200).json({
      isPlaying: false,
      albumImageUrl,
      artist,
      songUrl,
      title,});
  }

  const song = await response.json();
  console.log(song);
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
});

app.listen(port, () => {
  console.log('Server started on port 3001');
});