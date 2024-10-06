import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('dist'))

app.get('/api/ping', (_req, res) => {
    res.send('Hello fullstack open ping');
  });

  const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});