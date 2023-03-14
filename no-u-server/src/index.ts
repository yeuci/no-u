import express from 'express';
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('NO-U')
})

app.listen(port, () => {
  console.log(`Express server listening on  port: ${port}`);
});