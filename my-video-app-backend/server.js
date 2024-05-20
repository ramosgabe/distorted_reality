// Load environment variables
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch'; // Make sure it's installed

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware (optional, for cross-origin requests if your frontend is on a different domain)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to handle search
app.get('/search', async (req, res) => {
    const query = req.query.q;
    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items.length > 0) {
            const firstVideoId = data.items[0].id.videoId;  // Get the first video ID
            res.send({ videoId: firstVideoId });  // Send only the first video ID
        } else {
            res.status(404).send('No videos found');
        }
    } catch (error) {
        console.error('Error fetching YouTube API:', error);
        res.status(500).send('Error fetching data');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
