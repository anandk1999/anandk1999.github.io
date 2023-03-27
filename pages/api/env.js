const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.get('/api/env', (req, res, next) => {
  res.json({ client_id, client_secret, refresh_token });
});

app.listen(port, () => {
  console.log('Server is listening on port 3001');
});
