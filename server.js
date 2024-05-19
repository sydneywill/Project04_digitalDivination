import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Enable CORS for all routes
// app.use(cors({
//   origin: 'http://127.0.0.1:5500' // allowed origin(s)
// }));

app.use(cors({
  origin: '*'
}));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Defining the /games endpoint
app.get('/games', async (req, res) => {
  const birthYear = req.query.birthYear;
  const apiKey = 'a14e16e471604ff7898da4003434824f479ac48f';
  const url = `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&field_list=name,original_release_date,image&filter=original_release_date:${birthYear}-01-01%7C${birthYear}-12-31`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'GameFinder/1.0' // App namee
      }
    });
    const data = await response.json();
    res.json({ games: data.results });
  } catch (error) {
    console.error('Error fetching data from Giant Bomb API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});