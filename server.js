const express = require('express');
const Twit = require('twit');
const bodyParser = require('body-parser');
const WebSocketServer = require('ws').Server;
const http = require('http');
const creds = require('./creds.json');

const CLIENT = new Twit(creds);

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
let i = 1;
let counter = {};
const wss = new WebSocketServer({ server });
wss.on('connection', ws => {
  const subscriptions = {};
  const id = i++;
  console.log(`${id} OPEN`);
  ws.on('message', message => {
    const data = JSON.parse(message);
    if (data.sub && !subscriptions[data.sub]) {
      console.log('adding ', data.sub, 'subscription');
      subscriptions[data.sub] = CLIENT.stream('statuses/filter', { track: data.sub });
      subscriptions[data.sub].on('message', function (tweet) {
        tweet.keyword = data.sub;
        counter[tweet.keyword] = counter[tweet.keyword] ? counter[tweet.keyword] + 1 : 1;
        ws.send(JSON.stringify(tweet));
      });
      subscriptions[data.sub].on('warning', function (warning) {
        console.log(warning);
      });
    }
    if (data.unsub && subscriptions[data.unsub]) {
      console.log('shutting down ', data.unsub, 'stream');
      subscriptions[data.unsub].stop();
    }
  })
})

server.listen(3000, () => console.log('listening on port 3000'));
