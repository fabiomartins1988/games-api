import express from 'express';
import router from './src/main/routes/game';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Games API is running on port ${port}.`);
});

app.use(router)

export default app;