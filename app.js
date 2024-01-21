const express = require('express');
const app = express();
const port = 3000;

const mongoConnectionString = process.env.MONGO_URL || 'variable de entorno no está definida';;

app.get('/', (req, res) => {
  res.send(`Stalin Caiche: Connection String de MongoDB: ${mongoConnectionString}`);
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
