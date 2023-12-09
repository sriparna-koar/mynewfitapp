const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let events = [];

app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.json(newEvent);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
