import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Running in ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
});
