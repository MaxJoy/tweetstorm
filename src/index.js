const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  ws.send('location');
};

ws.onmessage = (message) => {
  console.log(JSON.parse(message.data).text);
};